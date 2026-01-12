​于 2025-09-07 22:28:44 发布
对于python而言，所谓的语法糖的关键目的是对一串代码进行简化，对于初学者而言，接触的第一个语法糖应该是以下代码：
```
a,b = b,a
```
这个语法糖实现的是对变量的引用内容交换，如果学习了解过c语言应该知道，如果希望在c语言的情况下进行交换，需要声明第三个变量：
```
int a =5;
int b = 5;
//开始交换
int c;
c = a;
a=b;
b=c;
//实现交换
```
其实，对于python而言，Python的a, b = b, a 通过元组打包和解包实现，等价于 temp = (b, a); a = temp[0]; b = temp[1]，但无需用户手动处理临时变量

为了简化代码实现pythonic，所以提供语法糖来简化代码。

对于python中可能最实用的语法糖要属装饰器了。

装饰器出现的根本目的是为了实现在不修改原来函数的代码情况下，为函数增加功能，这样的好处是对于公司来说可以方便管理以及实现代码复用。

在理解装饰器前，首先要了解什么是函数的闭包。
```
def out_func(a):
    def in_func():
        print('a')
    return in_func
```
上面代码就是一个闭包实例，其实闭包的根本逻辑是，python的名与地址的关系，在之前的博客中讲解过，变量名与地址的关系，其实函数也可以认为是一个“变量”。因为，函数也是把函数逻辑存储在内存中，调用逻辑需要一个地址去指向这个内存存储空间。

对于函数名和地址的逻辑关系可以通过以下的代码来理解：
```
def print_hello_world():
    print("hello world")

a = print_hello_world
a()
#打印hello world
```
 之前讲解过，python的引用机制，这里的逻辑其实还是一样，依赖于引用机制，让变量a也可以引用这个函数。然后通过a()来实现对函数的调用。

那么我们对于开始的闭包代码进行执行：
```
func = out_func(2)
```
由于返回值是in_func,是一个函数的名，就相当于是实现了以下的逻辑：
```
func = in_func
```
那么依赖之前的分析进行函数调用：
```
func()
#打印 2
```
对于这个代码的实现，首先的问题是，这个a是如何传入内部函数的？这就涉及到python的一个特殊的变量类型nonlocal，这个其实按照英语的大概意思理解，应该是，"不是本地"。

对于python的嵌套函数来说，如果变量没有找到会到上一层去寻找变量。为了更加理解这个事情，可以实现以下代码运行：
```
def out_func(a):
    def in_func():
        a = 4
        print(a)
    return in_func
func = out_func(2)
func()
#打印4
```
这里由于内部函数定义过了变量，所以调用的a是内部函数自己的a而不是说去获取外部的a。
```
def out_func(a):
    def in_func():
        print(a)
        a = 5
        
    return in_func
func = out_func(2)
func()
```
运行 结果如下：
```
Traceback (most recent call last):
  File "d:\csdn\csdn_1.py", line 8, in <module>
    func()
    ~~~~^^
  File "d:\csdn\csdn_1.py", line 3, in in_func
    print(a)
          ^
UnboundLocalError: cannot access local variable 'a' where it is not associated with a value
```
这个错误是Python中的UnboundLocalError，表明在函数内部尝试访问一个局部变量a，但该变量在访问前未被赋值。这种情况通常发生在函数内部对变量进行赋值操作（如a = ...），导致Python将其视为局部变量，但实际访问时变量尚未初始化。

由于这里编译器认为，a并没有被初始化，a是内部函数的变量。为了解决这个问题，可以使用nonlocal关键字：
```
def out_func(a):
    def in_func():
        nonlocal a
        print(a)
        a = 5
        print(a)
    return in_func
func = out_func(2)
func()
#打印2  5
```
这里的关键字nonlocal声明了a是外层变量，这样就解决了变量定义问题。

Python的变量作用域遵循LEGB规则（Local→Enclosing→Global→Built-in）
在函数内对变量赋值会默认创建新的局部变量
读取全局变量需用global，读取闭包变量需用nonlocal
那么了解了所谓闭包的概念那么接下来就要讲解装饰器了，装饰器其实就是通过“@”来实现对一个函数进行闭包封装，然后增加函数功能。
```
def out_func(func):
    def in_func():
        print('hello---我是被增加的功能')
        func()
    return in_func

@out_func
def print_hello_world():
    print("hello world")

if __name__ == '__main__':
    print_hello_world()
#打印
#hello---我是被增加的功能
#hello world
```
这里的装饰器其实是在定义的函数的下一行加入了一个代码，也就是说有以下等价形式：
```
@out_func
def print_hello_world():
    print("hello world")

def print_hello_world():
    print("hello world")
print_hello_world = out_func(print_hello_world)
```
注意，这里的关键在于下一行。对于这个语法逻辑的成立性，其实可以依靠一个代码来验证，首先我们要知道，就是对于函数没有被调用的话，内部代码不会被执行，也就是说，如果你写了不用，这个代码不会被使用。
```
def out_func(func):
    print('hello---我是外部函数')
    def in_func():
        print('hello---我是被增加的功能')
        func()
    return in_func

@out_func
def print_hello_world():
    print("hello world")

if __name__ == '__main__':
    pass

#打印 
#hello---我是外部函数
```
这里通过打印结果可以明显看出外部函数是被调用过了的。

既然如此。如果装饰器就是一个语法糖，那么我们可以借助对源代码的理解实现以下的逻辑：
```
class add_func:
    def __init__(self,func):
        self.func = func
    def __call__(self, *args, **kwds):
        print("__call__被调用")
        self.func()
@add_func
def print_hello_world():
    print("hello world")

if __name__ == '__main__':
    print_hello_world()
```
这里使用了类的魔术方法__call__的特性。来实现通过类对函数进行封装。与此同时，我们还可以进行拓展，就是实现装饰器工厂和多次装饰器修饰，这里给示范代码，自行理解：
```
def layer_1_func(b):
    def layer_2_func(func):
        def layer_3_func():
            print('我是layer3',b)
            func()
        return layer_3_func
    return layer_2_func

@layer_1_func(1)
def print_hello_world():
    print("hello world")
if __name__ == "__main__":
    print_hello_world()
#打印
#我是layer3 1
#hello world

这里的所谓的装饰器工厂的根本目的是代码的复用，减少代码需求。


def out_func_1(func):
    print('1111')
    def in_func_1():
        print('4444')
        func()

    return in_func_1

def out_func_2(func):
    print('2222')
    def in_func_2():
        print('3333')
        func()

    return in_func_2
@out_func_2
@out_func_1
def print_run():
    print('5555')

if __name__ == '__main__':
    print_run()

#打印
#1111
#2222
#3333
#4444
#5555
```
需要提醒的是，装饰器是在下一行增加代码，也就是说，可能之前增加的代码会被“挤”到下一行去。

还有一个比较常见的语法糖就是with上下文管理工具，其实还是比较简单，就是调用了两个魔术方法，或者通过装饰器利用yield特性实现。

这里简单讲解一下：
```
class with_func:
    def __init__(self):
        pass
    def __enter__(self):
        print('frist use')
    def __exit__(self,exc_type,exc_val,exc_tb):
        print("third use")

with with_func():
    print("second use")

#打印
#frist use
#second use
#third use
```
这里其实就是实现了以下代码逻辑：
```
with_func().__enter__()
print("second use")
with_func().__exit__()
```
但是需要注意的是__exit__传入的参数是4个，这个其实和关闭文件有关，是需要传入 报错的。

那么接下来通过利用yield也可以实现这个功能不过需要一个装饰器：
```
from contextlib import contextmanager

@contextmanager
def with_func():
    print('frist use')
    yield
    print('third use')


with with_func():
    print("second use")
```
与之前代码的运行结果一样，但是不同的是不需要四个参数，或者说这个过程被屏蔽了，执行两个next在__enter__和__exit__中。

也就是说，存在一下的等价形式：
```
from contextlib import contextmanager

@contextmanager
def with_func():
    print('frist use')
    yield 1 
    print('third use')

class with_func:
    def __init__(self):
        pass
    def __enter__(self):
        print('frist use')
        return 1
    def __exit__(self,exc_type,exc_val,exc_tb):
        print("third use")
```


​
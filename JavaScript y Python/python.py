print("Hello, World!")


if 5 > 2:
	print("Five is greater than two!")   	#Se necesita sangria para que funcione (AL MENOS UN ESPACIO)


if 5 > 2:
 print("Five is greater than two!") 		#usar la misma cantidad de espacios en el mismo bloque de código
 print("Five is greater than two!")


#Variables ----------------------------------------------------------------------------------------------------------
#Las variables distinguen entre mayúsculas y minúsculas: (A != a)


x = 5
y = "Hello, World!"


x = 5
y = "John"       #Las variables de cadena se pueden declarar mediante comillas simples o dobles
print(x)
print(y)


x = str(3)    # x will be '3'  		
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0


x = 5				#Para obtener el tipo de datos de una variable
y = "John"
print(type(x))
print(type(y))


#Variables Multiples-------------------------------------------------------------------------------------------------

x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)


x = y = z = "Orange"
print(x)
print(y)
print(z)


fruits = ["apple", "banana", "cherry"] 		#Cada variable tomara cada valor respectivamente
x, y, z = fruits
print(x)
print(y)
print(z)

print(x, y, z)
print(x + y + z)			#Concatenar


#Variables Globales-------------------------------------------------------------------------------------------------


x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()



x = "awesome"				#Crear una variable dentro de una función, con el mismo nombre que la variable global

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()
print("Python is " + x)


global x		#Si usa la global palabra clave, la variable pertenece al ámbito global

#Comentarios --------------------------------------------------------------------------------------------------------

#This is a comment.
print("Hello, World!")

#Comentarios de baris lineas ----------------------------------------------------------------------------------------

"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")


#Configuración del tipo de datos específico--------------------------------------------------------------------------

x = str("Hello World")				str	
x = int(20)					int	
x = float(20.5)					float	
x = complex(1j)					complex	
x = list(("apple", "banana", "cherry"))		list	
x = tuple(("apple", "banana", "cherry"))	tuple	
x = range(6)					range	
x = dict(name="John", age=36)			dict	
x = set(("apple", "banana", "cherry"))		set	
x = frozenset(("apple", "banana", "cherry"))	frozenset	
x = bool(5)					bool	
x = bytes(5)					bytes	
x = bytearray(5)				bytearray	
x = memoryview(bytes(5))			memoryview


#Conversión de tipo--------------------------------------------------------------------------------------------------

x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))

#Especificar un tipo de variable (Fundición)-------------------------------------------------------------------------

x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'

#Número aleatorio----------------------------------------------------------------------------------------------------

import random				#Importe el módulo aleatorio y muestre un número aleatorio entre 1 y 9

print(random.randrange(1, 10))
print(random.randrange(1, 10))

#Las cadenas son matrices--------------------------------------------------------------------------------------------

a = "Hello, World!"			#Imprime la letra "e"
print(a[1])


for x in "banana":			#Repasa las letras de la palabra "banana"
  print(x)

#Longitud de la cuerda-----------------------------------------------------------------------------------------------

a = "Hello, World!"			#Para obtener la longitud de una cadena, use la len()función.
print(len(a))

#Comprobar cadena----------------------------------------------------------------------------------------------------

txt = "The best things in life are free!"	#Para verificar si una determinada frase o carácter está presente en una cadena, podemos usar la palabra clave in
print("free" in txt)				#Lanzaa la respuesta booleana	True or False


#https://www.w3schools.com/

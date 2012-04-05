# ![Alt text](media/ruby-logo.gif)

.fx: first

Semih Özköroğlu `<sem@bil.omu.edu.tr>`

[http://sozkoroglu.me/](http://sozkoroglu.me/)

Nisan 2012

---

Giriş
---------

Kurulumu
--------
  sudo apt-get install ruby1.9.1-full

Kullanımı
---------

- `$ vim kullanım.rb`  veya `$ vim kullanım`

- `$ which ruby`

çıktı : /usr/bin/ruby

- `#!/usr/bin/ruby`

- `$ chmod + x kullanım.rb` veya `$ chmod + x kullanım`

- `$ ./kullanım.rb` veya `$ ./kullanım`

- `$ ruby kullanım.rb` veya `$ ruby kullanım`

---


İnteraktif Ruby
---------------


	 	$ irb

		irb(main):001:0>
		irb(main):010:0> puts "hello"
			hello
			=> nil    # Bu nedir ?

		irb(main):005:0> def goster name
		irb(main):006:1> name
		irb(main):007:1> end

		irb(main):009:0> s = goster "hello"
			=> "hello"
		irb(main):011:0> s
			=> "hello"

---

Nesne Methodları
----------------

		irb(main):032:0> a = "Hello"
		irb(main):032:0> a.methods # Deneyelim?
		irb(main):032:0> a.upcase
			=> "HELLO"
		irb(main):032:0> a
			=> "Hello"
		irb(main):035:0> a.upcase!
			=> "HELLO"
		irb(main):032:0> a
			=> "HELLO"
		-------------------
		irb(main):032:0> a = "Hello"
		irb(main):004:0> a.chop
			=> "Hell"
		irb(main):005:0> a
			=> "Hello"
		irb(main):006:0> a.chop!
			=> "Hell"
		irb(main):007:0> a
			=> "Hell"


---

Uygulamalar
-----------

 	!ruby
	def h(name = "World")
  	puts "Hello #{name.capitalize}!"
	end
	-----------
	def atama(x)
  	unless x.nil?
  		puts "parametre objesi var."
	  else
  	  puts "parametre objesi yok."
		end
	end

	atama(puts "hello")

# Ne Bekliyoruz ?

-----

Selamlama Örneği
----------------

	!ruby
	class Greeter
		def initialize(name = "World")
			@name = name
		end
		def say_hi
			puts "Hi #{@name}!"
		end
		def say_bye
			puts "Bye #{@name}, come back soon."
		end
	end

	person = Greeter.new("Pat")
	person.say_hi
	person.say_bye

---

Sınıf ve Nesne değişkenleri
---------------------------

	!ruby
	class Greeter
  	@@total = 0
  	def initialize(name = "World")
    	@name = name
    	@personal = 0
  	end
  	def say_hi
    	puts "Hi #{@name}!"
    	say
  	end
  	def say_bye
    	puts "Bye #{@name}, come back soon."
    	say
  	end
  	def say
    	puts "Kisisel", @personal += 1
    	puts "Toplam", @@total += 1
  	end
	end

---

Python ve Ruby Farklılıkları
----------------------------

- Metod çağrılarında parantez kullanımı genellikle isteğe bağlıdır.
- elif yerine elsif kullanılır.
- import yerine require kullanılır. Fakat kullanımları aynıdır.
- Bazı zorunlu harf kuralları vardır. (ör. sınıf isimleri büyük harfle başlar, değişkenler küçük harfle başlar).
- Erişim izinleri için Python’ın _voluntary_ underscore@convention@ ifadeleri yerine public, private ve protected ifadeleri vardır.
- Daha önceden belirlenmiş bir değişkeni silme yolu yoktur (Python’ın del ifadesi gibi). Değişkeni nil olarak ayarlayabilirsiniz, bu eski değişkenin eski değerini çöp toplayıcıya gönderir, ama değişken kapsamı içinde sembol tablosunda kalmaya devam eder.

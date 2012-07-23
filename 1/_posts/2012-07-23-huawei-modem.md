---
layout: post
title: Huawei E177 modem'in Ubuntu 11.10 'a tanıtılması
---

Turkcell modem kullanıyorum ve ubuntu 11.10 üzerinde bu modemi çalıştıramadım, yaptığım araştırmalar neticesinde Huawei E177 modellerinin sanal cdrom özelliği açık gelmekte ve bu sebeble ubuntu üzerinde bunu bir modem olarak göremiyoruz, ve şimdi modemimizin sanal cdrom özelliğini kapatmak için windows üzerinde birkaç işlem yapıcaz.

Bunun için öncelikle Putty programını şu adresten [indirin](http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe)

Şimdi putty ile modemimize seri bir bağlantı yaparak ayarlarını değiştiricez

Modemimizin hangi usb com'una bağlı oldugunu bulmak için Device manager'dan modem kısmından Huawei özelliklerine bakarak portunu buluyoruz.

Putty'i çalıştırdıktan sonra karşımıza çıkan pencerede serial kısmını seçerek ve portunu ( yani modem hangi slot'a takılı ise ) yazarak open diyoruz

Tabi bu arada `unable to connect` hatası alırsanız, şuanda sizin bir yandan modem üzerinden internet bağlantısını kullanmanızdan kaynaklanacak, bunun için öncelikle modemin internet bağlantısını kesiniz

putty ile modemimize bağlantı kurduğumuzda karşımıza açılan terminalde sırası ile şu komutları kullanın

-	`ATX`

- `AT^U2DIAG=0`

sanal özelliğinin açmak için ise `AT^U2DIAG=1` diyebiliriz.

Bundan sonra ubuntu üzerinde `Edit connection` kısmından `Mobile Broadband` bölümünü seçin ve ordan da yeni bağlantı eklemek için `add` seçeneğini seçin

Karşılaştıgımız kurulum penceresinde `Create a connection for this mobile broadband device` kısmında Huawei modemi görüyor olucaksınız,
ödeme planı kısmında ise APN mgb olarak belirtikten sonra ( Tabi bu modeme göre değişebilir ) bağlantınızı kurabilirsiniz.

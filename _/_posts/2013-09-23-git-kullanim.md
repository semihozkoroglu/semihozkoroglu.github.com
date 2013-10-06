---
layout: post
title: Source Tree ile Git Kullanımı
tag: git
---

# Git Kullanımı

İlk olarak [SourceTree](http://www.sourcetreeapp.com/download/) 'den github ile bağlantı kuracağımız tool 'u indiriyoruz.

Kurulum Aşamaları;

- İlk gelen ekrandaki bilgiler commit aşamasında kullanılacak

![İlk Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/1.png)

- İkinci ekranda bitbucket bilgilerimizi giriyoruz.

![İkinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/2.png)

- Bu aşamada istersek localde mevcut git depolarını keşfetmesini sağlayabiliriz.

![Üçüncü Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/3.png)

- Bu aşamada ister sol üst köşedeki button 'dan repo 'yu kendimiz manuel olarak ekleyebiliriz. Yada bir sonraki adımdaki işlemi uygulayabiliriz. Burda manuel olarak eklerken kullanacağımız url bir sonraki adımda gösterildi.

![Dördüncü Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/4.png)

- Bitbucket üzerindeki mevcut repoda clone kısmında terminal üzerinden manuel olarak clone etmemizi sağlayan komutu uygulayabiliriz. Yukarıdaki aşamada repo eklerken kullanacağımız url de burdaki url dir. Yada ekteki görselde belirtilen `Clone in SourceTree` tıklayarak direk SourceTree 'den clone yaptırabiliriz.

![Beşinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/5.png)

![Altıncı Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/6.png)

![Yedinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/7.png)

- Bitbucket parolamızı giriyoruz.

![Sekizinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/8.png)

- Clone diyerek projeyi locale alıyoruz.

![Dokuzuncu Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/9.png)

- Mevcut repolar ana menüde görünür halde, işlem yapmak istediğimiz repoyu seçiyoruz.

![Onuncu Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/10.png)

- Repoda mevcut brach 'lar görünmekte master brach 'ı default olarak gelmekte. Bu brach 'a tıkladığımız zaman son zamanda yapılan commitler ve commitler de yapılan değişikliklere ulaşabiliyoruz.

![Onbirinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/11.png)

![Onikinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/12.png)

![Onüçüncü Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/13.png)

- Projemiz üzerinde değişiklik yaptığımız zaman eğer master branch üzerindeysek `Uncommitted changes` olarak görünmektedir

![Ondördüncü Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/14.png)

- Bu commitlenmemiş değişikliği `commit` edebilmek için öncelikle `add` işlemini yapmalıyız. Bunun için commitlenmemiş satırı seçip üst menüden add iconuna tıklayarak commit edilmek için hazır hale getirmeliyiz.

- Burda asıl dikkat edilmesi gereken nokta `Uncommited changes` satırı seçildiği zaman şuanda working directory içinde yapılan tüm dosyalardaki değişiklikleri `files in working tree` kısmından görebiliriz. Yani burdaki kısım projemizdeki değişiklik yapılmış dosyaları göstermektedir. Biz burdan hangi dosyaları commitlemek istiyorsak önce onu seçip üst menüden `add` diyerek `files staged in index` kısmına geçirmeliyiz. Yani üst menüden `commit` butonuna tıkladığımız zaman bu kısımdaki dosyalar commitlenicektir. O zaman commitleme esnasında yaptığımız değişikliklerin hepsini birden commitlemek yerine yapılan işlemleri parçalara ayırıp ilişkili dosyaları commitlemek daha temiz bir commit yapısı sunar.

- Yani eğer değişiklik yaptığımız tüm dosyaları commitlemek istiyorsak `files in working tree` kısmındaki tüm dosyaları seçip `add` dememiz gerekmektedir. Bundan sonra commit yapabiliriz.


![Onbeşinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/22.png)

![Onbeşinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/23.png)

- `files staged in index` kısmındaki dosyaları commitlemek için üst menüden `commit` butonuna tıklamalıyız.

![Onaltıncı Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/16.png)

- Commit mesajını girmeliyiz. Bu kısmı boş bırakmamalıyız.

![Onyedinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/17.png)

![Onyedinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/18.png)

![Onyedinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/19.png)

- Commit işlemi aslında hangi dosyalarda ne değişiklik yapılmış bu bilgiyi entegre etme aşamasıdır. Değişikliklerimizi tam olarak göndermek için üst menüden `push` butonuna tıklamalıyız.

![Onsekizinci Aşama](https://raw.github.com/semihozkoroglu/File/master/SourceTree/20.png)


- Repo üzerinde yapılan değişiklikleri çekmek için üst menüden `pull` butonuna tıklıyoruz.

işlem tamamdır.
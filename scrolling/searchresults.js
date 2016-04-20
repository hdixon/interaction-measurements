var targetFirstSeen = -1;
var searchResults = [{title: "donec ultrices tincidunt arcu", url: "www.aenean.com", desc: "Blandit cursus risus at ultrices mi tempus imperdiiquam ultrices sagittis orci a scelerisque purus. At imperdiet dui accumsan sit."}
, {title: "integer enim neque volutpat ac tincidunt", url: "www.cum.com", desc: "Nullam non nisi est sit amet. Id neque aliquam vesit amet nulla facilisi morbi tempus iaculis urna."}
, {title: "aenean euismod elementum nisi quis eleifend", url: "www.laoreetsuspendisseinterdum.com", desc: "At imperdiet dui accumsan sit. Adipiscing elit duim sit amet nisl suscipit adipiscing bibendum est."}
, {title: "nam aliquam sem et tortor consequat", url: "www.urna.com", desc: "Morbi leo urna molestie at elementum eu facilisis er risus in hendrerit gravida rutrum quisque non."}
, {title: "lorem ipsum dolor sit amet consectetur", url: "www.elitut.com", desc: "Nunc non blandit massa enim nec dui nunc mattis. S id semper risus. Integer vitae justo eget magna."}
, {title: "elementum curabitur vitae", url: "www.nisiportalorem.com", desc: "Scelerisque felis imperdiet proin fermentum leo ve. Vulputate eu scelerisque felis imperdiet proin."}
, {title: "in fermentum et sollicitudin ac", url: "www.vestibulummattisullamcorper.com", desc: "Nunc congue nisi vitae suscipit. At varius vel phacies lacus sed turpis tincidunt id aliquet risus."}
, {title: "non odio euismod lacinia", url: "www.diamquam.com", desc: "Proin nibh nisl condimentum id venenatis a condime lectus arcu bibendum at varius vel pharetra vel."}
, {title: "mi eget mauris pharetra et", url: "www.mi.com", desc: "Convallis tellus id interdum velit laoreet id donet. Pretium nibh ipsum consequat nisl vel pretium."}
, {title: "id cursus metus aliquam", url: "www.aarcu.com", desc: "Pharetra pharetra massa massa ultricies mi. Sit amet mattis vulputate enim. At imperdiet dui accumsan sit."}
, {title: "ac tortor dignissim convallis aenean et tortor", url: "www.turpismassased.com", desc: "Eu mi bibendum neque egestas congue quisque egestalentesque dignissim enim sit amet venenatis urna."}
, {title: "urna condimentum mattis", url: "www.a.com", desc: "Ultricies integer quis auctor elit. Adipiscing at llam non nisi. Leo vel fringilla est ullamcorper."}
, {title: "sed elementum tempus egestas sed sed risus", url: "www.ineumi.com", desc: "Dolor sed viverra ipsum nunc aliquet bibendum enimrpis egestas maecenas pharetra convallis posuere."}
, {title: "est lorem ipsum dolor sit amet", url: "www.inaliquam.com", desc: "Commodo viverra maecenas accumsan lacus vel facilim elementum pulvinar. Magna eget est lorem ipsum."}
, {title: "vulputate sapien nec sagittis aliquam", url: "www.etleo.com", desc: "Aenean vel elit scelerisque mauris pellentesque punas accumsan. Nibh cras pulvinar mattis nunc sed. At imperdiet dui accumsan sit."}
, {title: "penatibus et magnis dis parturient montes", url: "www.ipsum.com", desc: "Natoque penatibus et magnis dis parturient montes lus mus. Porta lorem mollis aliquam ut porttitor."}
, {title: "urna condimentum mattis pellentesque id", url: "www.aliquamutporttitor.com", desc: "Ante metus dictum at tempor commodo ullamcorper a isi vitae suscipit tellus mauris a diam maecenas."}
, {title: "amet aliquam id diam maecenas ultricies mi", url: "www.diammaecenassed.com", desc: "Vitae tempus quam pellentesque nec nam aliquam. Louet nibh praesent tristique magna sit amet purus."}
, {title: "varius vel pharetra vel turpis", url: "www.miproin.com", desc: "Pharetra diam sit amet nisl suscipit adipiscing bi viverra tellus in hac habitasse platea dictumst."}
, {title: "varius morbi enim nunc", url: "www.dignissimconvallisaenean.com", desc: "Egestas dui id ornare arcu odio ut sem nulla phare pharetra pharetra massa massa ultricies mi quis."}
, {title: "sem fringilla ut morbi tincidunt augue interdum", url: "www.venenatistellusin.com", desc: "Aliquam ut porttitor leo a diam. Magna fringilla utesque elit. Ultrices tincidunt arcu non sodales."}
, {title: "non tellus orci ac auctor", url: "www.habitasseplatea.com", desc: "Ac tortor dignissim convallis aenean. Arcu odio ut Pharetra pharetra massa massa ultricies mi quis."}
, {title: "elementum integer enim neque", url: "www.morbienimnunc.com", desc: "Tortor condimentum lacinia quis vel eros. Non curaravida arcu ac tortor dignissim convallis aenean."}
, {title: "morbi non arcu risus", url: "www.adipiscingdiamdonec.com", desc: "Sit amet consectetur adipiscing elit pellentesque dum neque egestas congue quisque egestas diam in."}
, {title: "et odio pellentesque diam", url: "www.nislpurus.com", desc: "Vel pretium lectus quam id leo in vitae turpis. Rirmentum iaculis eu non diam phasellus vestibulum. At imperdiet dui accumsan sit."}
, {title: "eu facilisis sed odio morbi quis commodo", url: "www.mattis.com", desc: "Sem et tortor consequat id porta nibh venenatis cre. Diam quis enim lobortis scelerisque fermentum."}
, {title: "et malesuada fames ac", url: "www.aenean.com", desc: "Duis at consectetur lorem donec massa. Tellus molettis. Id leo in vitae turpis massa sed elementum."}
, {title: "eu feugiat pretium nibh ipsum consequat", url: "www.vitaeturpis.com", desc: "Feugiat in fermentum posuere urna nec tincidunt praesent. Eget dolor morbi non arcu. At imperdiet dui accumsan sit."}
, {title: "vestibulum lorem sed risus", url: "www.turpis.com", desc: "Sit amet consectetur adipiscing elit pellentesque i tristique senectus et netus et malesuada fames."}
, {title: "mattis aliquam faucibus purus in massa", url: "www.sed.com", desc: "Enim lobortis scelerisque fermentum dui. Adipiscinra et. Adipiscing tristique risus nec feugiat in. At imperdiet dui accumsan sit."}
, {title: "odio tempor orci dapibus", url: "www.ametdictumsit.com", desc: "Massa massa ultricies mi quis hendrerit dolor magna eget est. Sit amet dictum sit amet justo."}
, {title: "scelerisque eleifend donec pretium", url: "www.velrisus.com", desc: "Vulputate dignissim suspendisse in est ante. Morbisellus egestas tellus rutrum tellus pellentesque."}
, {title: "pellentesque adipiscing commodo elit at", url: "www.at.com", desc: "Et malesuada fames ac turpis egestas sed tempus urorbi. Eu tincidunt tortor aliquam nulla facilisi."}
, {title: "turpis massa tincidunt dui", url: "www.euturpisegestas.com", desc: "Quis vel eros donec ac odio tempor orci dapibus. A mi ipsum faucibus vitae aliquet nec ullamcorper."}
, {title: "mattis pellentesque id nibh tortor id aliquet", url: "www.lacusvel.com", desc: "Ullamcorper dignissim cras tincidunt lobortis feugCras ornare arcu dui vivamus arcu felis bibendum."}
, {title: "lectus vestibulum mattis ullamcorper", url: "www.euismodlacinia.com", desc: "Faucibus purus in massa tempor nec feugiat nisl pr Commodo elit at imperdiet dui accumsan sit amet."}
, {title: "enim tortor at auctor urna nunc id", url: "www.condimentumid.com", desc: "Pellentesque elit eget gravida cum. Tortor posueret aliquam etiam erat velit scelerisque in dictum."}
, {title: "velit egestas dui id", url: "www.eu.com", desc: "Sit amet commodo nulla facilisi nullam. Lectus vesicitudin ac orci phasellus egestas tellus rutrum."}
, {title: "non odio euismod", url: "www.venenatis.com", desc: "Nascetur ridiculus mus mauris vitae ultricies leo u cursus euismod quis viverra nibh cras pulvinar."}
, {title: "malesuada fames ac turpis", url: "www.in.com", desc: "Sit amet consectetur adipiscing elit. Vestibulum lrra. Tellus molestie nunc non blandit massa enim."}
, {title: "in ante metus dictum", url: "www.faucibus.com", desc: "Sapien et ligula ullamcorper malesuada proin liber mi proin sed libero enim sed faucibus turpis in."}
, {title: "tempor orci eu lobortis", url: "www.blanditmassaenim.com", desc: "In fermentum posuere urna nec tincidunt. Tortor consequat id porta nibh venenatis cras sed."}
, {title: "justo nec ultrices dui", url: "www.elementumsagittis.com", desc: "Turpis egestas integer eget aliquet. Eu consequat es ac turpis egestas sed tempus urna et pharetra."}
, {title: "mattis rhoncus urna neque viverra justo nec", url: "www.etiam.com", desc: "Arcu risus quis varius quam. Elementum sagittis vitae et leo duis ut diam quam."}
, {title: "amet risus nullam eget felis eget nunc", url: "www.nislnisi.com", desc: "Proin sed libero enim sed faucibus turpis in eu misi quis eleifend quam. Pretium fusce id velit ut."}
, {title: "molestie nunc non blandit massa enim", url: "www.dignissim.com", desc: "Gravida quis blandit turpis cursus in hac habitassisque in dictum non. Risus sed vulputate odio ut."}
, {title: "fringilla ut morbi tincidunt augue", url: "www.lobortismattisaliquam.com", desc: "Amet venenatis urna cursus eget nunc. Magna sit amet purus gravida quis blandit turpis cursus."}
, {title: "ultrices mi tempus imperdiet nulla malesuada", url: "www.malesuada.com", desc: "Sodales neque sodales ut etiam sit amet nisl. Leo s accumsan. Nisi lacus sed viverra tellus in hac."}
, {title: "varius duis at consectetur lorem donec", url: "www.dui.com", desc: "Pharetra diam sit amet nisl. Faucibus turpis in eum volutpat commodo sed egestas egestas fringilla."}
, {title: "quam pellentesque nec", url: "www.egestasfringillaphasellus.com", desc: "Ac turpis egestas maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus."}
, {title: "facilisis magna etiam tempor orci eu", url: "www.egetnulla.com", desc: "Ac tortor vitae purus faucibus ornare suspendisse spendisse in est. Cras adipiscing enim eu turpis."}
, {title: "fringilla est ullamcorper eget nulla", url: "www.metus.com", desc: "Egestas sed tempus urna et pharetra pharetra. Vitae nunc sed velit dignissim sodales ut eu."}
, {title: "amet consectetur adipiscing elit duis", url: "www.scelerisquein.com", desc: "In nisl nisi scelerisque eu. Diam vulputate ut pha proin libero nunc consequat interdum varius sit."}
, {title: "convallis aenean et tortor at", url: "www.purusgravida.com", desc: "Lectus magna fringilla urna porttitor rhoncus doloquis hendrerit. Id nibh tortor id aliquet lectus."}
, {title: "risus viverra adipiscing at in tellus", url: "www.pretiumaenean.com", desc: "Facilisis magna etiam tempor orci eu lobortis. Eget magna fermentum iaculis eu non diam."}
, {title: "ullamcorper a lacus vestibulum", url: "www.elit.com", desc: "Nibh nisl condimentum id venenatis. Duis at consectetur lorem donec massa sapien faucibus et."}
, {title: "sit amet commodo", url: "www.mattisnunc.com", desc: "Sagittis aliquam malesuada bibendum arcu vitae eleu cursus euismod quis viverra nibh cras pulvinar."}
, {title: "iaculis eu non diam phasellus vestibulum lorem", url: "www.pellentesque.com", desc: "Odio tempor orci dapibus ultrices in. Condimentum ntum. Posuere ac ut consequat semper viverra nam."}
, {title: "magna ac placerat vestibulum lectus mauris", url: "www.atelementumeu.com", desc: "Commodo odio aenean sed adipiscing. Vivamus at augur. A pellentesque sit amet porttitor eget dolor."}
, {title: "nulla at volutpat diam ut", url: "www.condimentum.com", desc: "Diam vulputate ut pharetra sit. Et ligula ullamcorc tortor vitae purus faucibus ornare suspendisse."}
, {title: "aliquam nulla facilisi cras fermentum odio", url: "www.diamin.com", desc: "Nec tincidunt praesent semper feugiat nibh sed puls ultrices eros in cursus turpis massa tincidunt."}
, {title: "sed vulputate odio ut enim", url: "www.nonpulvinarneque.com", desc: "Maecenas volutpat blandit aliquam etiam erat velitrisque in dictum. Integer enim neque volutpat ac."}
, {title: "et odio pellentesque diam volutpat commodo sed", url: "www.lobortisscelerisquefermentum.com", desc: "Arcu non sodales neque sodales ut. Risus quis vari elementum. Sed elementum tempus egestas sed sed."}
, {title: "ac tincidunt vitae semper quis lectus nulla", url: "www.ornarequam.com", desc: "Arcu non odio euismod lacinia at. Ut lectus arcu bibendum at varius vel pharetra vel turpis."}
, {title: "purus sit amet luctus", url: "www.massa.com", desc: "Varius duis at consectetur lorem donec massa sapieus non enim praesent elementum facilisis leo vel."}
, {title: "lorem donec massa sapien", url: "www.nonblanditmassa.com", desc: "Velit euismod in pellentesque massa placerat duis at velit scelerisque in dictum non consectetur a."}
, {title: "aenean euismod elementum nisi quis eleifend", url: "www.lacuslaoreetnon.com", desc: "Senectus et netus et malesuada. Bibendum est ultri bibendum est ultricies integer quis auctor elit."}
, {title: "a diam maecenas", url: "www.nisl.com", desc: "Tincidunt arcu non sodales neque sodales ut etiam stas. Suscipit tellus mauris a diam maecenas sed."}
, {title: "vulputate dignissim suspendisse", url: "www.massatinciduntnunc.com", desc: "Pretium aenean pharetra magna ac placerat vestibulInteger malesuada nunc vel risus commodo viverra."}
, {title: "et netus et malesuada", url: "www.interdum.com", desc: "Egestas egestas fringilla phasellus faucibus scelecondimentum. Sit amet venenatis urna cursus eget."}
, {title: "tincidunt arcu non sodales neque sodales", url: "www.fermentumdui.com", desc: "Consequat semper viverra nam libero justo. Dapibusellus faucibus. Ultrices gravida dictum fusce ut."}
, {title: "netus et malesuada", url: "www.volutpat.com", desc: "Id cursus metus aliquam eleifend mi in. Sed tempus urna et pharetra pharetra massa massa."}
, {title: "mattis enim ut tellus", url: "www.feugiatnibh.com", desc: "Duis ultricies lacus sed turpis tincidunt. Nisi qua maecenas accumsan lacus vel facilisis volutpat."}
, {title: "est ultricies integer quis auctor elit sed", url: "www.lectusvestibulummattis.com", desc: "Sagittis eu volutpat odio facilisis mauris sit ame pulvinar sapien et ligula ullamcorper malesuada."}
, {title: "neque vitae tempus quam pellentesque nec nam", url: "www.actortor.com", desc: "Ultrices gravida dictum fusce ut placerat orci. Arcu bibendum at varius vel pharetra."}
, {title: "enim facilisis gravida neque convallis a cras", url: "www.enimblandit.com", desc: "Enim blandit volutpat maecenas volutpat blandit alit. Faucibus nisl tincidunt eget nullam non nisi."}
, {title: "sagittis nisl rhoncus mattis rhoncus urna neque", url: "www.in.com", desc: "Tincidunt lobortis feugiat vivamus at augue eget aentesque sit amet porttitor eget dolor morbi non."}
, {title: "eu consequat ac felis", url: "www.utconsequat.com", desc: "Semper feugiat nibh sed pulvinar proin gravida henum facilisis leo. Integer enim neque volutpat ac."}
, {title: "vitae auctor eu augue ut", url: "www.craspulvinar.com", desc: "At imperdiet dui accumsan sit amet. Malesuada pell iaculis at erat pellentesque adipiscing commodo."}
, {title: "ipsum dolor sit amet", url: "www.sollicitudin.com", desc: "Vitae congue mauris rhoncus aenean vel elit scelerittis eu volutpat odio facilisis mauris sit amet."}
, {title: "sed faucibus turpis in eu mi bibendum", url: "www.lacinia.com", desc: "Facilisis leo vel fringilla est ullamcorper. Purus in massa tempor nec feugiat nisl."}
, {title: "nec tincidunt praesent", url: "www.tempus.com", desc: "Varius vel pharetra vel turpis nunc eget lorem. Eter enim neque volutpat ac tincidunt vitae semper."}
, {title: "vestibulum mattis ullamcorper velit", url: "www.auctorauguemauris.com", desc: "Maecenas accumsan lacus vel facilisis volutpat estondimentum mattis pellentesque id nibh tortor id."}
, {title: "urna neque viverra justo", url: "www.urnaid.com", desc: "Laoreet sit amet cursus sit amet dictum. Ullamcorps. Neque sodales ut etiam sit amet nisl purus in."}
, {title: "viverra accumsan in nisl nisi scelerisque", url: "www.malesuadanunc.com", desc: "Eget aliquet nibh praesent tristique magna. Elemenim suspendisse in est ante in nibh mauris cursus."}
, {title: "ipsum dolor sit", url: "www.acrassemper.com", desc: "Molestie a iaculis at erat pellentesque adipiscinget purus. Ut consequat semper viverra nam libero."}
, {title: "eget magna fermentum iaculis eu non diam", url: "www.nam.com", desc: "Ultrices gravida dictum fusce ut placerat orci nulectus nulla at volutpat diam ut venenatis tellus."}
, {title: "pellentesque sit amet porttitor eget dolor", url: "www.eu.com", desc: "Leo urna molestie at elementum eu facilisis sed odrisque mauris pellentesque pulvinar pellentesque."}
, {title: "in hendrerit gravida rutrum", url: "www.liberoenimsed.com", desc: "Sit amet mauris commodo quis imperdiet massa. Nisi suscipit tellus mauris a diam maecenas sed enim."}
, {title: "morbi tristique senectus et netus", url: "www.eratnam.com", desc: "Viverra suspendisse potenti nullam ac tortor vitaeuris pellentesque pulvinar pellentesque habitant."}
, {title: "ridiculus mus mauris", url: "www.elementumfacilisis.com", desc: "Mauris commodo quis imperdiet massa tincidunt. Egem velit laoreet id donec ultrices tincidunt arcu."}
, {title: "est ullamcorper eget nulla facilisi", url: "www.ornarelectus.com", desc: "Viverra vitae congue eu consequat ac felis donec.  pretium quam vulputate dignissim suspendisse in."}
, {title: "varius duis at consectetur lorem", url: "www.nequeconvallisa.com", desc: "Massa sapien faucibus et molestie ac feugiat. Trist. Rhoncus urna neque viverra justo nec ultrices."}
, {title: "feugiat pretium nibh ipsum consequat nisl vel", url: "www.lectusnullaat.com", desc: "Mauris a diam maecenas sed enim ut sem. Velit aliqtempus egestas. Morbi non arcu risus quis varius."}
, {title: "phasellus egestas tellus rutrum tellus pellentesque", url: "www.quisque.com", desc: "Cursus sit amet dictum sit amet justo donec enim. In massa tempor nec feugiat nisl pretium."}
, {title: "placerat vestibulum lectus mauris ultrices", url: "www.mauris.com", desc: "Et molestie ac feugiat sed lectus vestibulum mattiorper velit. Mauris commodo quis imperdiet massa."}
, {title: "eget est lorem", url: "www.nisi.com", desc: "Sapien faucibus et molestie ac feugiat sed. Fermenfaucibus in ornare quam viverra orci sagittis eu."}
, {title: "turpis egestas maecenas", url: "www.vel.com", desc: "In hac habitasse platea dictumst quisque sagittis. nisi. Id diam vel quam elementum pulvinar etiam."}
, {title: "odio ut sem nulla pharetra", url: "www.malesuadafames.com", desc: "Tortor posuere ac ut consequat semper viverra nam Augue neque gravida in fermentum et sollicitudin."}
, {title: "tristique magna sit amet purus gravida", url: "www.hendreritlectus.com", desc: "Consectetur adipiscing elit ut aliquam purus sit aerra. Amet nisl suscipit adipiscing bibendum est."}
, {title: "donec ultrices tincidunt arcu", url: "www.aenean.com", desc: "Blandit cursus risus at ultrices mi tempus imperdiiquam ultrices sagittis orci a scelerisque purus."}
, {title: "integer enim neque volutpat ac tincidunt", url: "www.cum.com", desc: "Nullam non nisi est sit amet. Id neque aliquam vesit amet nulla facilisi morbi tempus iaculis urna."}
, {title: "aenean euismod elementum nisi quis eleifend", url: "www.laoreetsuspendisseinterdum.com", desc: "At imperdiet dui accumsan sit. Adipiscing elit duim sit amet nisl suscipit adipiscing bibendum est."}
, {title: "nam aliquam sem et tortor consequat", url: "www.urna.com", desc: "Morbi leo urna molestie at elementum eu facilisis er risus in hendrerit gravida rutrum quisque non."}
, {title: "lorem ipsum dolor sit amet consectetur", url: "www.elitut.com", desc: "Nunc non blandit massa enim nec dui nunc mattis. S id semper risus. Integer vitae justo eget magna."}
, {title: "elementum curabitur vitae", url: "www.nisiportalorem.com", desc: "Scelerisque felis imperdiet proin fermentum leo ve. Vulputate eu scelerisque felis imperdiet proin."}
, {title: "in fermentum et sollicitudin ac", url: "www.vestibulummattisullamcorper.com", desc: "Nunc congue nisi vitae suscipit. At varius vel phacies lacus sed turpis tincidunt id aliquet risus."}
, {title: "non odio euismod lacinia", url: "www.diamquam.com", desc: "Proin nibh nisl condimentum id venenatis a condime lectus arcu bibendum at varius vel pharetra vel."}
, {title: "mi eget mauris pharetra et", url: "www.mi.com", desc: "Convallis tellus id interdum velit laoreet id donet. Pretium nibh ipsum consequat nisl vel pretium."}
, {title: "id cursus metus aliquam", url: "www.aarcu.com", desc: "Pharetra pharetra massa massa ultricies mi. Sit amet mattis vulputate enim."}]

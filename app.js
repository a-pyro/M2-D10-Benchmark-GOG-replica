console.log('Hi there! 🔥');
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';

const imgWidth256 = [
  'https://images-4.gog-statics.com/ad68a58a4dcc05edbe97edc0370cc4865ba09327cf47a68e47d214c6e4f4a1d4_product_tile_256.jpg',
  'https://images-1.gog-statics.com/9fee86856dec591d46e81ee8eba47c4945a980ce9730549581eae646330629d5_product_tile_256.jpg',
  'https://images-4.gog-statics.com/30c6d68f5d0c8bbe9c2eb47f8781ec621a2f0ce40704c7dfe510533ca3a29f9e_product_tile_256.jpg',
  'https://images-4.gog-statics.com/55421003997b40eed483d66a1b07c165d12c18e0ea95abafc7a9d374fbabcbe4_product_tile_256.jpg',
  'https://images-1.gog-statics.com/631d16d2df90fb7af5c9ca479fd3cb2612d3fbdadbee2c1e919f89d7a325c266_product_tile_256.jpg',
  'https://images-2.gog-statics.com/7b2d5f2634bf8a8dfbda80623154131370886d5f47903c1c057a8d18a07b4c58_product_tile_256.jpg',
  'https://images-3.gog-statics.com/eb4ccfebafa91120a9a0a9ab33b1e30067492f2e8d00b6cbfdd7c0e6a0d7658b_product_tile_256.jpg',
  'https://images-1.gog-statics.com/6eac13e0b18bf52b309b12f545e096b796b9d0751a235cb8ed56aa5cd406f604_product_tile_256.jpg',
  'https://images-4.gog-statics.com/5301f0691a8d54feb261a2d5161e4e4202774dabbad8d0147f2e59e98826731e_product_tile_256.jpg',
  'https://images-3.gog-statics.com/4ca4a8a92ae24f99bbfbda6b754a49061eb1a82c8af61ad377bb582af86889ed_product_tile_256.jpg',
  'https://images-1.gog-statics.com/21ec7a017719964834e7281f2d39f0d594acc1f9af6d5ac4e7f8bee1840e3c5d_product_tile_256.jpg',
  'https://images-1.gog-statics.com/02f4abdb3e5ad980b457ad96efc757ffb7c0f2191a3c85938fc0dd2b17de4b77_product_tile_256.jpg',
  'https://images-1.gog-statics.com/e97bf4c960f337e3bd25570b56e0750c84eac47ab233926905e7a8a13620ecbb_product_tile_256.jpg',
  'https://images-1.gog-statics.com/64c26ef524cb37a6fe7fd52b1daa5dd5989d2be44e0e228f2b9fc49da69fc475_product_tile_256.jpg',
  'https://images-3.gog-statics.com/a012ccc89cb268d8754c4abd543c848a7eee2ac2d2375cb999a6301b26052c7c_product_tile_256.jpg',
  'https://images-3.gog-statics.com/0f76094e3d5644de1b03005b1edc6ffb0eba45664662a144370c1da75f89de8e_product_tile_256.jpg',
  'https://images-4.gog-statics.com/005625e62576ebfafeb6a855f43a6b3fc6a5be9f65e2863ba3c49aeeade43de6_product_tile_256.jpg',
  'https://images-4.gog-statics.com/8f63dc385febb3fff5c7935b3194fe6a62c99f3bc8ecba424cfd0cec96b5d938_product_tile_256.jpg',
  'https://images-1.gog-statics.com/580062e5b703136f52181b153ed3cadd6231593430ceb3006e1c1909f198361e_product_tile_256.jpg',
  'https://images-1.gog-statics.com/06e3800f7c37dc55488ca36606a1b5c0ca6fe1c32f1bd3e0c41c37ef31e6a9d0_product_tile_256.jpg',
  'https://images-4.gog-statics.com/53e8f54467b5b3725f8185e83212e3576572ba0bba0f89b1b8e87c2fb0180128_product_tile_256.jpg',
  'https://images-3.gog-statics.com/ebf53a56825afe880a53ecb036dc2b989b4b5cbf891793da9d66a3b3f20e36b8_product_tile_256.jpg',
  'https://images-1.gog-statics.com/9aae2859d134d50e9f6cc2be243f98d0a86dafabb622014f13f89f4766a7812a_product_tile_256.jpg',
  'https://images-2.gog-statics.com/ddb9e4f9ea4ba708272952f07b05c9683a2389799b1567e520048121d3b65ea5_product_tile_256.jpg',
  'https://images-2.gog-statics.com/0b76cf6285faea7768d6f63cb036bc3bb6ac262892a712781ea2cb0e3d8ce1d1_product_tile_256.jpg',
  'https://images-3.gog-statics.com/59e010c72e82ee456410e57b370946fd0fc79597e058d5788dd0947024a6c182_product_tile_256.jpg',
  'https://images-3.gog-statics.com/9f0c62725e6f41687136a51709d5c5426641043ba80efb0ce6ea7684bf58d643_product_tile_256.jpg',
  'https://images-3.gog-statics.com/02acdd8ec6a78d9a1aa5e748cbef8ba17f1e6955ccd5a80d40ff17b1bc2e15fe_product_tile_256.jpg',
  'https://images-3.gog-statics.com/7b784b762b59c7382c8a2f0e94641b841a32cb74b7868b5390f605849f68b701_product_tile_256.jpg',
  'https://images-4.gog-statics.com/0ceca65006b5e99462415d364c9590aa9a00e31088f49f62591e149da1f5590d_product_tile_256.jpg',
  'https://images-1.gog-statics.com/2273d84b08d9fed9a10bf2b7211c497fcefd6d14e200cc39a83b21fc43708dc1_product_tile_256.jpg',
  'https://images-3.gog-statics.com/569be39571dde6564a043f2f16f05246602cd1d52109dcb959c271f61600ad22_product_tile_256.jpg',
  'https://images-1.gog-statics.com/3285b4eeb47310f44e208d8c13834d3ee185e9586550e67eaed42aff557a3e0e_product_tile_256.jpg',
  'https://images-2.gog-statics.com/248fcfe9a1e4070de8ea98353f10330d9e6037fa915c775455ee2e53f276f4b2_product_tile_256.jpg',
  'https://images-2.gog-statics.com/005222a9a49b3b47993b4e73f9b4a4c1d8306039a6ea205a437b23b2e73506d0_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8a00026186a92125265f56006bab13eddf3ce4eab0dee74f4a81c429cda1fcbf_product_tile_256.jpg',
  'https://images-4.gog-statics.com/b5f43700dd712a7dd1f7dc7d1fff5c8ac4b8db3135dd2170fd0324f5a9c6444e_product_tile_256.jpg',
  'https://images-3.gog-statics.com/f3ba07480f127105d3560598bd99c3fd4dbc0ee423d75f006c225b9e251d178e_product_tile_256.jpg',
  'https://images-3.gog-statics.com/89e51af1528c1c41cb6f4d005e13c32a5c0943a07ea4eb0db0095ff7e122cc1d_product_tile_256.jpg',
  'https://images-1.gog-statics.com/fe09a510e6da4b4d65e943566e23220c9fc3e99f89378ed87c09cc6917511a96_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8232c34724cdf71ecbd551c401c680558097391a961b2ade1bc5aa1f08335149_product_tile_256.jpg',
  'https://images-1.gog-statics.com/878fa42d86465d6da8e8070d210adeaed7a54ea623cd63ec9a29ccbef6c18080_product_tile_256.jpg',
  'https://images-4.gog-statics.com/be51652eac1eec9f283eb5519aaf3604998b8a71921058bb8d45bb1857e74f6b_product_tile_256.jpg',
  'https://images-1.gog-statics.com/f464909580fa200164473afe33edb3000b9035c203adae616c1a6e5056d1bea2_product_tile_256.jpg',
  'https://images-3.gog-statics.com/20b2f38277674c138be4dc58afe3e4c6b6c4d4ee7ab891db15b5ff0dff8971d7_product_tile_256.jpg',
  'https://images-4.gog-statics.com/afb9bb8cc8b62686ba08bb2051e2f94d5aa20d0eda897ea5acef58a8b68f8304_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8ad8592a047241a8a30c39289d32c1ef61f725244d5ca440504ada25e6a641e4_product_tile_256.jpg',
  'https://images-4.gog-statics.com/7d424601bd268ed55847a483044dd8a73f717495f198458f2e6e605ea558b399_product_tile_256.jpg',
  'https://images-1.gog-statics.com/415ed850ed0919e94886a1dceff234b4907606691e03cbefef99cfe913370a18_product_tile_256.jpg',
  'https://images-4.gog-statics.com/ff96372ceec8b1b750b61c17231b44c63ec91c27e1a87f795b6927e5157713bd_product_tile_256.jpg',
  'https://images-1.gog-statics.com/fb2fd36f67e09357086e9dadf0692770676f98026a68e5e87d9725c8b005a079_product_tile_256.jpg',
  'https://images-2.gog-statics.com/5644c220e0ac1469a2da0fdfbafa32bd43fc68755a222aee9f535fa37d6e534b_product_tile_256.jpg',
  'https://images-1.gog-statics.com/078055d917a1ccdbc56337e1ffd42428c0cec58f11ddc397c4e3f7ff570ce901_product_tile_256.jpg',
  'https://images-1.gog-statics.com/b063c46a7e35ba1925653cefcea5014728f1cc0c54880b2f5978eff8f488e9d7_product_tile_256.jpg',
  'https://images-2.gog-statics.com/8777963f1f8a49bac012a6a7c533bead83e66eab402a9603dc9a280b47755331_product_tile_256.jpg',
  'https://images-2.gog-statics.com/c07fb6821411546195400a7b0be5985168f1fde1af54edacd2d6db0284681869_product_tile_256.jpg',
  'https://images-4.gog-statics.com/18c6c3dd62bda3e73c103cbfa86a9949bfed3dc139a6d46356d74f3a7adc31fb_product_tile_256.jpg',
  'https://images-1.gog-statics.com/01f30d7e58567757353953d17654a9812ce460c35cd6e9f3b96897c0d7cbfeb6_product_tile_256.jpg',
  'https://images-1.gog-statics.com/e929cefd96ac19a530e3aa34dfa148999006e212f220b518744205f9d3d9b1a6_product_tile_256.jpg',
  'https://images-2.gog-statics.com/4ad61727ff99098e2f10d7c66f3669148694597992b0e46f62550a4ad76d11d7_product_tile_256.jpg',
  'https://images-2.gog-statics.com/384064881c0c18cbd2b7ebc076c0d905f0a6b5c17e6c37814cc52287e1cc46c3_product_tile_256.jpg',
  'https://images-1.gog-statics.com/f5554c0ae3da78912a982c981c410498cf9a207a19ee132feb8c53ec258c2e4e_product_tile_256.jpg',
  'https://images-2.gog-statics.com/aac0b029b17cd8248f1efb9e6a0b1a5ae36ced52a5794a0bd2ae316e2117d159_product_tile_256.jpg',
  'https://images-4.gog-statics.com/321e36cc880af5f107ed325fb158ca1ce90ca32fa69d0e011c458681800479b2_product_tile_256.jpg',
  'https://images-4.gog-statics.com/34fb4652664cd6633a74fa2037d1d61d3833b45fd6ac34dfa6296dd62ae0053d_product_tile_256.jpg',
  'https://images-4.gog-statics.com/417c3d50c21614c4ee2eb0143fdbb57dcced20791dd9a894d34e22933165fab9_product_tile_256.jpg',
  'https://images-1.gog-statics.com/4d28596348dbe2ace92068c56681010639615d84ec41bd6ac4a8f1e082ab881f_product_tile_256.jpg',
  'https://images-2.gog-statics.com/72c25599c4bd97ea0e9257822798041f916f9d8480c62364af8d4ecb053b2942_product_tile_256.jpg',
  'https://images-3.gog-statics.com/38f182e09437a2495aa199a28a81c68eaf5ce9fa16f0404160d8e49810b2768b_product_tile_256.jpg',
  'https://images-4.gog-statics.com/7079356550f5dc4c54696e76577dc021e86f6777f46ea0f1fb0bc3097720cbc7_product_tile_256.jpg',
  'https://images-3.gog-statics.com/565b3be0a6514a0d1a17654d06f40fdfdbdd4545ec4d5e0b7ec7e5d644e3d200_product_tile_256.jpg',
  'https://images-2.gog-statics.com/fee4616448aa85d6e106af06944f64d2f8e66d0dc8af5b736bf5071fe7ffe819_product_tile_256.jpg',
  'https://images-3.gog-statics.com/278c4ae8d21c5a975fedabcfadc739ed46ca308d6dfb7ea56484d2b82aa22612_product_tile_256.jpg',
  'https://images-3.gog-statics.com/fd86580ddf9b58bd7e8752c3480ba2761bc1b94d87d06c1f3bb63361fb2a9920_product_tile_256.jpg',
  'https://images-2.gog-statics.com/2470f1b7f6a94b35303ee395e859a00954790bea38049423c06f201979166852_product_tile_256.jpg',
  'https://images-3.gog-statics.com/003a6de64649367ad41794d8de3d969a472636a92aba5a1ce90cc7db32bdbba3_product_tile_256.jpg',
  'https://images-2.gog-statics.com/5a4a5c397cdce1d6336ff3676f7f0272200c2b7beb2682a4650538994ccba82d_product_tile_256.jpg',
  'https://images-3.gog-statics.com/bd97997c37d8a4ae87f6b3db62b5cbb11e41330726ee30ab8e58dc246774c068_product_tile_256.jpg',
  'https://images-3.gog-statics.com/60cda7024433da2da6cee09843b883da49151ae23513a103c2ba61bc5f17b926_product_tile_256.jpg',
  'https://images-4.gog-statics.com/b79bc751755cd44ccd8d4c93c40acb83885490e9278954d50bd776ed7d5380e4_product_tile_256.jpg',
  'https://images-2.gog-statics.com/960314181c628e51ab621dce0ae3a229915820322dcdcb280aa2528c76bf4650_product_tile_256.jpg',
  'https://images-3.gog-statics.com/39ded4cf43e25d54af5efd816fe738113bf84d1e9d593a743a58d999b655fb94_product_tile_256.jpg',
  'https://images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_256.jpg',
  'https://images-1.gog-statics.com/5ef864afcff7a54c489bc815573c59818daec24a0b63a28d643ef347ed5c776c_product_tile_256.jpg',
  'https://images-2.gog-statics.com/0aca3039ce638f7f20e64a4b0f74f40a67e1ffeac00ebb1985d401a22022ceb9_product_tile_256.jpg',
  'https://images-4.gog-statics.com/f70d312490e7517637f94b94137538b875739d6ac63b5cbf49c42cc96ee7eb63_product_tile_256.jpg',
  'https://images-3.gog-statics.com/94f51548505272104e98243e46b1c8872e6bc165a0412b9bde56128320517363_product_tile_256.jpg',
  'https://images-1.gog-statics.com/d1938652107c06a6399f3cb95e6c28795f56886ff12adda50276b128a808ff79_product_tile_256.jpg',
  'https://images-4.gog-statics.com/d27152e79189024693bf67cc04995d80e1a2cad7a6ae232ae285a1b47a1fd815_product_tile_256.jpg',
  'https://images-3.gog-statics.com/4d00dd99f6bc3e1c252e9888f2ada92d0041652d2df294807cc8c9af7791d52c_product_tile_256.jpg',
  'https://images-2.gog-statics.com/1f81235de2e65b7aadd95b8cd6410981aa41e35461f6b718160dcb7744cfb3fe_product_tile_256.jpg',
  'https://images-1.gog-statics.com/b5c3f944af3851e083af6c1ef3b8634ac4c66f6a65c856923369cb7a09aaef52_product_tile_256.jpg',
  'https://images-1.gog-statics.com/2f288a964694bba7068e1fc28dbcd7d2fcae7eb854a2ddd92b3793fe62e81ef4_product_tile_256.jpg',
  'https://images-1.gog-statics.com/533dab765201beebae5f9f82709116ae05e8ed828fa87ec86a6e1ef716c393c5_product_tile_256.jpg',
  'https://images-1.gog-statics.com/f5f0751dd936501833b99defacebdbeed94abb57ed79459e553cbf01a425c941_product_tile_256.jpg',
  'https://images-2.gog-statics.com/2d10981ff7ca74e9f628fd2a61203783eb943123f432854ae65ede7397636f23_product_tile_256.jpg',
  'https://images-2.gog-statics.com/8d3950f7d89d3c1e8995fedf4ac9884fbc28a948b9213669fac30a0e25ba6d74_product_tile_256.jpg',
  'https://images-4.gog-statics.com/409993ae05dfa48caa30943b3d2f97cd0f462e0da9fca81edff85cc6a957fe3d_product_tile_256.jpg',
  'https://images-2.gog-statics.com/e73c72a1915f369f1e1ad8faa2689b81949baffb76ff6d2eb7b6bedd06ac9ea6_product_tile_256.jpg',
  'https://images-3.gog-statics.com/11df9d69f6815d8fdd74ab99f316ea31a3c9cb86e7d564eee661db1ce9a591e1_product_tile_256.jpg',
  'https://images-3.gog-statics.com/0da97598450095152daa62933aa8152c567e7946b491433c83705374b9ce282c_product_tile_256.jpg',
  'https://images-3.gog-statics.com/8e678b874f4f65f28f7c86d76a5bf953f09bc8fe9df663655b9b1ca7fd1c0b9e_product_tile_256.jpg',
  'https://images-4.gog-statics.com/53e8f54467b5b3725f8185e83212e3576572ba0bba0f89b1b8e87c2fb0180128_product_tile_256.jpg',
  'https://images-4.gog-statics.com/be51652eac1eec9f283eb5519aaf3604998b8a71921058bb8d45bb1857e74f6b_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8a8849faa3e251999b32732b35c13a56418ba119f889f1540fb8e3125b2f20fb_product_tile_256.jpg',
  'https://images-1.gog-statics.com/0bc565722de208171c766fa97290e8993b061a11bdcb203dce4bc148ab2abbe1_product_tile_256.jpg',
  'https://images-4.gog-statics.com/588a148267a5dd6ae38034f7fab14d685b441e18cd82a28f736206ba99284535_product_tile_256.jpg',
  'https://images-3.gog-statics.com/d6fe0ebe40ef6117c1c8979c00777ce64f8a521302fd95ec13afdb8ebfa4349a_product_tile_256.jpg',
  'https://images-4.gog-statics.com/ff96372ceec8b1b750b61c17231b44c63ec91c27e1a87f795b6927e5157713bd_product_tile_256.jpg',
  'https://images-2.gog-statics.com/3b679795a1168c527e39c9adadb62318ce5fb362099a7f512aecc3087793f2cb_product_tile_256.jpg',
  'https://images-2.gog-statics.com/ddb9e4f9ea4ba708272952f07b05c9683a2389799b1567e520048121d3b65ea5_product_tile_256.jpg',
  'https://images-4.gog-statics.com/005625e62576ebfafeb6a855f43a6b3fc6a5be9f65e2863ba3c49aeeade43de6_product_tile_256.jpg',
  'https://images-4.gog-statics.com/8f63dc385febb3fff5c7935b3194fe6a62c99f3bc8ecba424cfd0cec96b5d938_product_tile_256.jpg',
  'https://images-3.gog-statics.com/f3ba07480f127105d3560598bd99c3fd4dbc0ee423d75f006c225b9e251d178e_product_tile_256.jpg',
  'https://images-1.gog-statics.com/254f44f49e1517c9d193fcc364d61f72b9b2dac60b37bd46a1973dfdc31ab1bf_product_tile_256.jpg',
  'https://images-1.gog-statics.com/e97bf4c960f337e3bd25570b56e0750c84eac47ab233926905e7a8a13620ecbb_product_tile_256.jpg',
  'https://images-3.gog-statics.com/9f0c62725e6f41687136a51709d5c5426641043ba80efb0ce6ea7684bf58d643_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8232c34724cdf71ecbd551c401c680558097391a961b2ade1bc5aa1f08335149_product_tile_256.jpg',
  'https://images-3.gog-statics.com/24abd77530a7ba0bb56a936b10c6be2f34c22c418533f01d6fca243551278a10_product_tile_256.jpg',
  'https://images-1.gog-statics.com/7bf52fd46f3e05242a6105ca2aebaa87b80686a55e7b59eae8bdcafeba5ff573_product_tile_256.jpg',
  'https://images-1.gog-statics.com/64c26ef524cb37a6fe7fd52b1daa5dd5989d2be44e0e228f2b9fc49da69fc475_product_tile_256.jpg',
  'https://images-1.gog-statics.com/9aae2859d134d50e9f6cc2be243f98d0a86dafabb622014f13f89f4766a7812a_product_tile_256.jpg',
  'https://images-3.gog-statics.com/7b784b762b59c7382c8a2f0e94641b841a32cb74b7868b5390f605849f68b701_product_tile_256.jpg',
  'https://images-3.gog-statics.com/569be39571dde6564a043f2f16f05246602cd1d52109dcb959c271f61600ad22_product_tile_256.jpg',
  'https://images-3.gog-statics.com/1f844722c8b4ccf5bde04dbf16878d541af311b702d27f4616a8af3f54bb0d23_product_tile_256.jpg',
  'https://images-4.gog-statics.com/0ceca65006b5e99462415d364c9590aa9a00e31088f49f62591e149da1f5590d_product_tile_256.jpg',
  'https://images-1.gog-statics.com/02f4abdb3e5ad980b457ad96efc757ffb7c0f2191a3c85938fc0dd2b17de4b77_product_tile_256.jpg',
  'https://images-4.gog-statics.com/ddf9dc6180df5ebbc5bafa5bf4457fb1b22799b9ec8302b660e51dd2d5f3047e_product_tile_256.jpg',
  'https://images-4.gog-statics.com/d9ff84ccbb074cfa697260bc3afd9d0f0d7c10f7d43f0af8b21c34834830665d_product_tile_256.jpg',
  'https://images-3.gog-statics.com/a012ccc89cb268d8754c4abd543c848a7eee2ac2d2375cb999a6301b26052c7c_product_tile_256.jpg',
  'https://images-2.gog-statics.com/f948f0cf91bdd76e13c0d77e10ee7a6dcdf0e7c8715f96b9b075e6129aa13688_product_tile_256.jpg',
  'https://images-1.gog-statics.com/1f65a8964d4005699e601ab93bbee4e7f34ec13e7d01d7f96cafc79b72cb1bc3_product_tile_256.jpg',
  'https://images-2.gog-statics.com/248fcfe9a1e4070de8ea98353f10330d9e6037fa915c775455ee2e53f276f4b2_product_tile_256.jpg',
  'https://images-3.gog-statics.com/5581d96b368889e2a55f0f0f2c4372a6164dd17a7f0f1da8beb671dcf34eb036_product_tile_256.jpg',
  'https://images-1.gog-statics.com/2273d84b08d9fed9a10bf2b7211c497fcefd6d14e200cc39a83b21fc43708dc1_product_tile_256.jpg',
  'https://images-1.gog-statics.com/415ed850ed0919e94886a1dceff234b4907606691e03cbefef99cfe913370a18_product_tile_256.jpg',
  'https://images-4.gog-statics.com/7d424601bd268ed55847a483044dd8a73f717495f198458f2e6e605ea558b399_product_tile_256.jpg',
  'https://images-1.gog-statics.com/580062e5b703136f52181b153ed3cadd6231593430ceb3006e1c1909f198361e_product_tile_256.jpg',
  'https://images-2.gog-statics.com/0b76cf6285faea7768d6f63cb036bc3bb6ac262892a712781ea2cb0e3d8ce1d1_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8ad8592a047241a8a30c39289d32c1ef61f725244d5ca440504ada25e6a641e4_product_tile_256.jpg',
  'https://images-3.gog-statics.com/89e51af1528c1c41cb6f4d005e13c32a5c0943a07ea4eb0db0095ff7e122cc1d_product_tile_256.jpg',
  'https://images-1.gog-statics.com/78c586755872dde66bd25a112112aec3159e439d6e6a366149d6f4e5afc8b4ec_product_tile_256.jpg',
  'https://images-1.gog-statics.com/f464909580fa200164473afe33edb3000b9035c203adae616c1a6e5056d1bea2_product_tile_256.jpg',
  'https://images-4.gog-statics.com/804c8f0d5f6008142fcd167646aa85599dfca0a39c23cda033816c0259c2c630_product_tile_256.jpg',
  'https://images-2.gog-statics.com/005222a9a49b3b47993b4e73f9b4a4c1d8306039a6ea205a437b23b2e73506d0_product_tile_256.jpg',
  'https://images-4.gog-statics.com/5db881b7c6948527eb5616f374d491fddbba223c733347e2b77ebfcb8d1b8b95_product_tile_256.jpg',
  'https://images-1.gog-statics.com/fe09a510e6da4b4d65e943566e23220c9fc3e99f89378ed87c09cc6917511a96_product_tile_256.jpg',
  'https://images-3.gog-statics.com/02acdd8ec6a78d9a1aa5e748cbef8ba17f1e6955ccd5a80d40ff17b1bc2e15fe_product_tile_256.jpg',
  'https://images-2.gog-statics.com/676349019ef41dd3535f2bd70cb20e43dbcabd02bef1e2b1217bc440451187c6_product_tile_256.jpg',
  'https://images-1.gog-statics.com/8a00026186a92125265f56006bab13eddf3ce4eab0dee74f4a81c429cda1fcbf_product_tile_256.jpg',
  'https://images-1.gog-statics.com/557424ce69196afd147e311d4c71a23f88d4171603f37680e59ca572d167c43e_product_tile_256.jpg',
  'https://images-4.gog-statics.com/afb9bb8cc8b62686ba08bb2051e2f94d5aa20d0eda897ea5acef58a8b68f8304_product_tile_256.jpg',
  'https://images-1.gog-statics.com/74f97f5d957fbf955bb99423771ff7382e88baa3f859e678281c52a2f7501d47_product_tile_256.jpg',
  'https://images-1.gog-statics.com/766d6d7fb33ab7e480789d89f74fe8b35191a29fb6c04f1377eac7846f5c2bdd_product_tile_256.jpg',
  'https://images-3.gog-statics.com/20b2f38277674c138be4dc58afe3e4c6b6c4d4ee7ab891db15b5ff0dff8971d7_product_tile_256.jpg',
  'https://images-2.gog-statics.com/380b534687af9623bc602e1804eab38b2043a26de69700fd4428a1ee02c8ff81_product_tile_256.jpg',
  'https://images-1.gog-statics.com/878fa42d86465d6da8e8070d210adeaed7a54ea623cd63ec9a29ccbef6c18080_product_tile_256.jpg',
  'https://images-3.gog-statics.com/ebf53a56825afe880a53ecb036dc2b989b4b5cbf891793da9d66a3b3f20e36b8_product_tile_256.jpg',
  'https://images-4.gog-statics.com/b5f43700dd712a7dd1f7dc7d1fff5c8ac4b8db3135dd2170fd0324f5a9c6444e_product_tile_256.jpg',
  'https://images-1.gog-statics.com/06e3800f7c37dc55488ca36606a1b5c0ca6fe1c32f1bd3e0c41c37ef31e6a9d0_product_tile_256.jpg',
  'https://images-2.gog-statics.com/e0a18c754670b0cc9392010f88b2ab1e773240037cba0841d389cdff9ce98097_product_tile_256.jpg',
  'https://images-1.gog-statics.com/3285b4eeb47310f44e208d8c13834d3ee185e9586550e67eaed42aff557a3e0e_product_tile_256.jpg',
  'https://images-3.gog-statics.com/0f76094e3d5644de1b03005b1edc6ffb0eba45664662a144370c1da75f89de8e_product_tile_256.jpg',
  'https://images-1.gog-statics.com/6b554f8440a33a5eaa5854da0928fb8641164f6ec24b042a106f9065fde72975_product_tile_256.jpg',
];

const salesLI = document.querySelectorAll('#salesUL > li > a');
salesLI.forEach((item) =>
  item.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    salesLI.forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
  })
);

const carousel = document.getElementById('carouselExampleIndicators2');

// const showCarousel = (carouselItem,  )

// const fillCarousel
const horizontalImages = document.querySelectorAll('.img-horizontal');
horizontalImages.forEach((image) => {
  image.src = `gog-assets/tile (${Math.floor(Math.random() * 38) + 1}).jpg`;
});

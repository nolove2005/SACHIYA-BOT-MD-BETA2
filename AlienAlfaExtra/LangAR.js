


//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                                     //
//                                                       ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ ２                                                           //
//                                                                                                                                                     //
//                                                                    Ｖ：１．０．１                                                                     //
//                                                                                                                                                     //
//                                                       ▄▀█ █░░ █ █▀▀ █▄░█   ▄▀█ █░░ █▀▀ ▄▀█                                                          //
//                                                       █▀█ █▄▄ █ ██▄ █░▀█   █▀█ █▄▄ █▀░ █▀█                                                          //
//                                                                                                                                                     //
//                                                                                                                                                     //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//





// Obfuscated By AlienAlfa


/**
 * //═══════════[ Thanks To ]══════════════//
 * 
 * SL SACHIYA.
 * //════════════════════════════//
*/

// CURRENTLY RUNNING ON BETA VERSION!!
/**
   * MIT License
* 
   * Create By Dika Ardnt.
   * Edited By Xeon Bot Inc.
   * Modified By Alien-Alfa
   * © 2022 Alien-Alfa.
* 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
* 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/







lang.active = 'بالفعل تنشيط'


exports.inactive = 'تم إلغاء تنشيطه بالفعل'


 exports.mess = {
success: 'فعله ✓',
admin: 'هذه الميزة للمشرف فقط!',
botAdmin: 'يجب أن يكون البوت مسؤولاً أولاً!',
owner: 'هذه الميزة فقط للمالك!',
group: 'الميزة تستخدم فقط للمجموعات!',
private: 'الميزات المستخدمة فقط للدردشة الخاصة!',
bot: 'هذه الميزة مخصصة للبوت فقط',
wait: 'تحت المعالجة...',
linkm: 'أين الرابط؟',
error: 'خطأ!!',
endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، سيتم إعادة تعيين الحد كل 12 ساعة',
ban: 'لقد تم حظرك من قبل المالك ، إذا كنت تريد أن تكون غير محظور ، مالك الدردشة.',
nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
banChat: 'تم حظر الروبوت في هذه المجموعة ، يرجى الاتصال بالمالك لإلغاء الحظر'
}

//=============================================================================================================================================================


//  AntiLink  \\

 exports.antilinkon  = {
    
    group: 'النجاح في تشغيل antilink الدردشة الجماعية في هذه المجموعة',
    youtube: 'النجاح في تشغيل رابط فيديو youtube في هذه المجموعة',
    youtubech: 'النجاح في تشغيل قناة youtube antilink في هذه المجموعة',
    instagram: 'النجاح في تشغيل instagram antilink في هذه المجموعة',
    facebook: 'النجاح في تشغيل Facebook antilink في هذه المجموعة',
    telegram: 'النجاح في تشغيل Telegram antilink في هذه المجموعة',
    tiktok: 'النجاح في تشغيل tiktok antilink في هذه المجموعة',
    twitter: 'النجاح في تشغيل twitter antilink في هذه المجموعة',
    all: 'النجاح في تشغيل جميع مضادات الارتباط في هذه المجموعة'
}



 exports.antilinkwarn  = {
    
    group: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط دردشة جماعية في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    youtube: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط youtube في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    youtubech: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط قناة youtube في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    instagram: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط instagram في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    facebook: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط facebook في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    telegram: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط برقية في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    tiktok: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مشرفًا ، فلا ترسل رابط tiktok في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    twitter: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل رابط تويتر في هذه المجموعة وإلا فسيتم طردك على الفور!`,
    all: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nإذا لم تكن مسؤولاً ، فلا ترسل أي رابط في هذه المجموعة وإلا فسيتم طردك على الفور!`
}



 exports.antilinkoff  = {
    group: 'نجحنا في إيقاف تشغيل antilink للدردشة الجماعية في هذه المجموعة',
    youtube: 'النجاح في إيقاف تشغيل رابط فيديو youtube في هذه المجموعة',
    youtubech: 'النجاح في إيقاف تشغيل قناة youtube antilink في هذه المجموعة',
    instagram: 'النجاح في إيقاف تشغيل instagram antilink في هذه المجموعة',
    facebook: 'النجاح في إيقاف Facebook antilink في هذه المجموعة',
    telegram: 'النجاح في إيقاف تشغيل Telegram antilink في هذه المجموعة',
    tiktok: 'النجاح في إيقاف تشغيل tiktok antilink في هذه المجموعة',
    twitter: 'النجاح في إيقاف تشغيل twitter antilink في هذه المجموعة',
    all: 'النجاح في إيقاف تشغيل جميع مضادات الارتباط في هذه المجموعة'
}



//=============================================================================================================================================================


//   Functions   \\
 exports.functionson  = {
    antivirus: 'النجاح في تشغيل مضاد الفيروسات في هذه المجموعة',
    autoreply: 'النجاح في تشغيل الرد التلقائي في هذه المجموعة',
    antitoxic: 'النجاح في تشغيل مضاد السموم في هذه المجموعة',
    antiwame: 'النجاح في تشغيل مناهضة المرأة في هذه المجموعة',
    nsfw: 'النجاح في تشغيل nsfw في هذه المجموعة'
}


 exports.functionswarn  = {
    antivirus: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nلا يسمح لأي شخص بإرسال فيروس في هذه المجموعة ، العضو الذي يرسل سيتم طرده على الفور!`,
    antitoxic: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nلا يسمح لأحد باستخدام الكلمات البذيئة في هذه المجموعة ، ومن يستخدمها سيتم ركله على الفور!`,
    antiwame: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nلا أحد مسموح له بإرسال wa.me في هذه المجموعة ، الشخص الذي يرسل سيتم ركله على الفور!`,
    nsfw: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nتم تمكين ميزة Nsfw (ليست آمنة للعمل) في هذه المجموعة ، مما يعني أنه يمكن للمرء الوصول إلى الرسومات الجنسية من الروبوت!`
}


 exports.functionsoff  = {
    antivirus: 'النجاح في إيقاف تشغيل مضاد الفيروسات في هذه المجموعة',
    autoreply: 'النجاح في إيقاف الرد التلقائي في هذه المجموعة',
    antitoxic: 'النجاح في إيقاف مضادات السموم في هذه المجموعة',
    antiwame: 'النجاح في إيقاف تشغيل مضاد للسم في هذه المجموعة',
    nsfw: 'النجاح في إيقاف تشغيل nsfw في هذه المجموعة'
}



//=============================================================================================================================================================

//   Guess  \\

 exports.guess = (prefix,command) => {
unfinished = "لا تزال هناك جلسات غير منتهية!",
example = `Example : ${prefix + command} أغنية \ n \ n الخيار: \ n1. أغنية \ n2. صورة \ n3. قائلا \ n4. جملة \ n5. كلمات \ n6. طعام`,
song = `ما اسم هذه الاغنية؟\n\nفنان : ${result.artist}\nزمن : 60s`,
picture = `الرجاء الإجابة على السؤال أعلاه\n\nوصف : ${result.deskripsi}\nزمن : 60s`,
word = `يرجى الإجابة على السؤال التالي\n\n${result.soal}\nزمن : 60s`,
sentence = `يرجى الإجابة على السؤال التالي\n\n${result.soal}\nزمن : 60s`,
lyrics = `املأ الكلمات المفقودة أدناه: *${result.soal}*?\nزمن : 60s`,
saying = `*اجب على الاسئلة التالية :*\n${result.soal}*\nزمن : 60s`
}

 exports.guessbutton  = {
    song: 'تخمين الأغنية',
    picture: 'تخمين الصورة',
    word: 'خمن الكلمة',
    sentence: 'تخمين الجملة',
    lyrics: 'تخمين الأغاني',
    saying: 'تخمين القول'
}    

//=============================================================================================================================================================


 exports.enableordisable = `الرجاء النقر فوق الزر أدناه \ n \ n تشغيل للتمكين \ n إيقاف للتعطيل`


 exports.replycaption = (prefix,command) => {
    return `إرسال / الرد على الصورة مع التسمية التوضيحية ${prefix + command}`
}

 exports.bcerr = (prefix,command) => {
    return `* إرسال / رد الفيديو / الصوت / الصورة التي تريد بثها مع التسمية التوضيحية * ${prefix + command}`
}

 exports.blocerr = (prefix,command) => {
    return `يستخدم ${prefix}bcloc text\n\nمثال : ${prefix + command} attention everybody`
}

 exports.notbybot = 'لم يتم إرسال الرسالة من قبل الروبوت!'


 exports.mainerr = '*خطأ*'


 exports.takeresult = `ها أنت ذا!`


 exports.textNext = `التالي `


 exports.textbutt1 = 'بينغ'


 exports.textbutt2 = 'قائمة الطعام 🐰'


 exports.textbutt3 = 'صاحب 😈'


 exports.texturlbutt1 = 'موقع يوتيوب 🍓'


 exports.texturlbutt2 = 'النصي '


 exports.unfinished = "لا تزال هناك جلسات غير منتهية!"

 exports.stickererr = (prefix,command) => {
    return `إرسال صورة / فيديو مع شرح ${prefix + command}\nمدة الفيديو 1-9 ثواني`
}

 exports.sticviderr = (prefix,command) => {
    return 'بحد أقصى 10 ثوان!'
}

 exports.replycap = (prefix,command) => {
    return `إرسال / الرد على الصورة مع التسمية التوضيحية ${prefix + command} *نص*`
}

 exports.textcap = (prefix,command) => {
    return `نص الرد مع التسمية التوضيحية ${prefix + command}`
} 

 exports.linkerr = "خطأ في الارتباط!"

 exports.madeby = `مصنوع بواسطة`


 exports.waitamin = `انتظر لحظة بينما تجعل الشعار حوالي دقيقة واحدة`


 exports.emojiz = (prefix,command) => {
    return "أدخل الرموز التعبيرية ، بحد أقصى 1 رمز تعبيري ، على سبيل المثال؟" + ` ${prefix + command} `
}

 exports.invalidlink = `* الرابط الذي قدمته غير صالح *`


 exports.example = `مثال`


//=============================================================================================================================================================

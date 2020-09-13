var nameHU = 'Fülöp Tamás';
var nameEN = 'Tamas Fulop';
var professionHU = 'Junior Szoftverfejlesztő';
var professionEN = 'Junior Software Developer';
var homeHU = 'Magyarország, Dunaújváros';
var homeEN = 'Dunaujvaros, Hungary';
var aboutHU = '<p class="paragraph">Szoftverfejlesztő tudásom alapját <strong><em>Java 8, HTML 5, CSS 3, MySQL, Git, Maven</em></strong> technológiák ismeretei alkotják.' +
    '<br>Szoftverfejlesztői képességemet a <a href="https://github.com/TamasFulopEftomi" target="_blank" title="Tekintsd meg Github repozitorimat."><strong>Github</strong></a>' +
    ' repozitorimban található kisebb-nagyobb projekteken keresztül mutatom be. Pl.: Acélszalaghasítóállvány méretszerkesztő: <a href="https://github.com/TamasFulopEftomi/steel_slitting_calculator" target="_blank"><strong>katt ide</strong>.</a>    </p><p class="paragraph">Önéletrajzomat megnézheted a <a href="https://www.linkedin.com/in/tamasfulopeftomi/"' +
    ' target="_blank" title="Látogass meg a LinkedIn-en."><strong>LinkedIn</strong></a>-en.</p><p class="paragraph">A <a href="https://www.facebook.com/tamas.fulop.eftomi"' +
    ' target="_blank" title="Látogass meg a Facebook-on."><strong>Facebook</strong></a> profilomon keresztül többet megtudhatsz rólam és hobbijaimról.</p>';
var aboutEN = '<p class="paragraph">My software development knowledge based on the next technologies: <strong><em>Java 8, HTML 5, CSS 3, MySQL, Git, Maven</em></strong>.' +
    '<br>You can find out more about my ability as a software developer through smaller and larger projects in my <a href="https://github.com/TamasFulopEftomi" target="_blank"' +
    ' title="Take a look at my Github repository."><strong>Github</strong></a> repository. E.g.: Steel Slitting Stand Dimension Calculator: <a href="https://github.com/TamasFulopEftomi/steel_slitting_calculator" target="_blank"><strong>click here</strong>.</a></p><p class="paragraph">You can see my professional CV on <a href="https://www.linkedin.com/in/tamasfulopeftomi/"' +
    ' target="_blank" title="Visit me on LinkedIn."><strong>LinkedIn</strong></a>.</p><p class="paragraph">On my <a href="https://www.facebook.com/tamas.fulop.eftomi"' +
    ' target="_blank" title="Visit me on Facebook."><strong>Facebook</strong></a> profile you can see more about me and my hobbies.</p>';
var contactHU = 'Lépj velem kapcsolatba:';
var contactEN = 'Contact me via:';
var githubHU = '<a href="https://github.com/TamasFulopEftomi" target="_blank" title="Tekintsd meg Github repozitorimat."><i class="fab fa-2x fa-github black trans"></i></a>';
var githubEN = '<a href="https://github.com/TamasFulopEftomi" target="_blank" title="Take a look at my Github repository."><i class="fab fa-2x fa-github black trans"></i></a>';
var linkedinHU = '<a href="https://www.linkedin.com/in/tamasfulopeftomi/" target="_blank" title="Látogass meg a LinkedIn-en."><i class="fab fa-2x fa-linkedin-in black trans"></i></a>';
var linkedinEN = '<a href="https://www.linkedin.com/in/tamasfulopeftomi/" target="_blank" title="Visit me on LinkedIn."><i class="fab fa-2x fa-linkedin-in black trans"></i></a>';
var facebookHU = '<a href="https://www.facebook.com/tamas.fulop.eftomi" target="_blank" title="Látogass meg a Facebook-on."><i class="fab fa-2x fa-facebook black trans"></i></a>';
var facebookEN = '<a href="https://www.facebook.com/tamas.fulop.eftomi" target="_blank" title="Visit me on Facebook."><i class="fab fa-2x fa-facebook black trans"></i></a>';
var emailHU = '<a href="mailto:tamas.fulop.eftomi@gmail.com" target="blank" title="Küldj email-t: tamas.fulop.eftomi@gmail.com"><i class="far fa-2x fa-envelope black trans"></i></a>';
var emailEN = '<a href="mailto:tamas.fulop.eftomi@gmail.com" target="blank" title="Send me email: tamas.fulop.eftomi@gmail.com"><i class="far fa-2x fa-envelope black trans"></i></a>';
var mobileHU = '<a href="tel:+36302512561" target="blank" title="Hívj fel: +36 30 251 2561"><i class="fas fa-2x fa-mobile-alt black trans"></i></a>';
var mobileEN = '<a href="tel:+36302512561" target="blank" title="Call me on: +36 30 251 2561"><i class="fas fa-2x fa-mobile-alt black trans"></i></a>';

function languageChangeHU() {
    document.getElementById('name').innerHTML = nameHU;
    document.getElementById('profession').innerHTML = professionHU;
    document.getElementById('home').innerHTML = homeHU;
    document.getElementById('about').innerHTML = aboutHU;
    document.getElementById('contact').innerHTML = contactHU;
    document.getElementById('github').innerHTML = githubHU;
    document.getElementById('linkedin').innerHTML = linkedinHU;
    document.getElementById('facebook').innerHTML = facebookHU;
    document.getElementById('email').innerHTML = emailHU;
    document.getElementById('mobile').innerHTML = mobileHU;
}

function languageChangeEN() {
    document.getElementById('name').innerHTML = nameEN;
    document.getElementById('profession').innerHTML = professionEN;
    document.getElementById('home').innerHTML = homeEN;
    document.getElementById('about').innerHTML = aboutEN;
    document.getElementById('contact').innerHTML = contactEN;
    document.getElementById('github').innerHTML = githubEN;
    document.getElementById('linkedin').innerHTML = linkedinEN;
    document.getElementById('facebook').innerHTML = facebookEN;
    document.getElementById('email').innerHTML = emailEN;
    document.getElementById('mobile').innerHTML = mobileEN;
}


document.getElementById('name').innerHTML = nameEN;
document.getElementById('profession').innerHTML = professionEN;
document.getElementById('home').innerHTML = homeEN;
document.getElementById('about').innerHTML = aboutEN;
document.getElementById('contact').innerHTML = contactEN;
document.getElementById('github').innerHTML = githubEN;
document.getElementById('linkedin').innerHTML = linkedinEN;
document.getElementById('facebook').innerHTML = facebookEN;
document.getElementById('email').innerHTML = emailEN;
document.getElementById('mobile').innerHTML = mobileEN;
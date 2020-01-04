var nameHU = 'Fülöp Tamás';
var nameEN = 'Tamas Fulop';
var professionHU = 'Junior Szoftverfejlesztő';
var professionEN = 'Junior Software Developer';
var homeHU = 'Magyarország, Dunaújváros';
var homeEN = 'Dunaujvaros, Hungary';
var aboutHU = '<p class="paragraph">Szoftverfejlesztő tudásom alapját a <strong>Java JavaScript HTML5 CSS3 MySQL Git</strong> technológiák alkotják.<Br>Jelenlegi szoftverfejlesztői képességemet a <strong>Github</strong> repozitorimban található projekteken keresztül mutatom be.</p><p class="paragraph"><strong>LinkedIn</strong> profilomban megtekintheted a szakmai önéletrajozomat.</p><p class="paragraph">Hobbiaimmal kapcsolatos eseményeket a <strong>Facebook</strong> profilomon keresztül tekintheted meg.</p>';
var aboutEN = '<p class="paragraph">My software developer knowledge based upon the next technologies: <strong>Java JavaScript HTML5 CSS3 MySQL Git</strong>.<br>I present my current software developer ability through smaller and larger projects in my <strong>Github</strong> repository.</p><p class="paragraph">You can see my professional CV within my <strong>LinkedIn</strong> account.</p><p class="paragraph">In my <strong>Facebook</strong> profile you can take a look events related to my hobbies.</p>';
var contactHU = 'Lépj velem kapcsolatba:';
var contactEN = 'Contact me via:';
var githubHU = '<a href="https://github.com/TamasFulopEftomi" target="_blank" title="Kérem tekintsd meg repozitorimat."><i class="fab fa-2x fa-github black trans"></i></a>';
var githubEN = '<a href="https://github.com/TamasFulopEftomi" target="_blank" title="Please take a look at my repository."><i class="fab fa-2x fa-github black trans"></i></a>';
var linkedinHU = '<a href="https://www.linkedin.com/in/tamasfulopeftomi/" target="_blank" title="Látogasd meg LinkedIn profilomat."><i class="fab fa-2x fa-linkedin-in black trans"></i></a>';
var linkedinEN = '<a href="https://www.linkedin.com/in/tamasfulopeftomi/" target="_blank" title="Visit me on LinkedIn."><i class="fab fa-2x fa-linkedin-in black trans"></i></a>';
var facebookHU = '<a href="https://www.facebook.com/tamas.fulop.eftomi" target="_blank" title="Látogasd meg Facebook profilomat."><i class="fab fa-2x fa-facebook black trans"></i></a>';
var facebookEN = '<a href="https://www.facebook.com/tamas.fulop.eftomi" target="_blank" title="Visit me on Facebook."><i class="fab fa-2x fa-facebook black trans"></i></a>';
var emailHU = '<a href="mailto:tamas.fulop.eftomi@gmail.com" target="blank" title="Írj email-t: tamas.fulop.eftomi@gmail.com"><i class="far fa-2x fa-envelope black trans"></i></a>';
var emailEN = '<a href="mailto:tamas.fulop.eftomi@gmail.com" target="blank" title="Send me email: tamas.fulop.eftomi@gmail.com"><i class="far fa-2x fa-envelope black trans"></i></a>';

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
}

function languageChangeEN() {
    document.getElementById('name').innerHTML = nameEN;
    document.getElementById('profession').innerHTML = professionEN;
    document.getElementById('home').innerHTML = homeEN;
    document.getElementById('about').innerHTML = aboutEN;
    document.getElementById('contact').innerHTML =contactEN;
    document.getElementById('github').innerHTML = githubEN;
    document.getElementById('linkedin').innerHTML = linkedinEN;
    document.getElementById('facebook').innerHTML = facebookEN;
    document.getElementById('email').innerHTML = emailEN;
}


document.getElementById('name').innerHTML = nameEN;
document.getElementById('profession').innerHTML = professionEN;
document.getElementById('home').innerHTML = homeEN;
document.getElementById('about').innerHTML = aboutEN;
document.getElementById('contact').innerHTML =contactEN;
document.getElementById('github').innerHTML = githubEN;
document.getElementById('linkedin').innerHTML = linkedinEN;
document.getElementById('facebook').innerHTML = facebookEN;
document.getElementById('email').innerHTML = emailEN;
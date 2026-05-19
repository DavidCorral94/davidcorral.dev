const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
const year = new Date().getFullYear();
const age = getAge('1994-06-05');
const messages = {
    en: {
        message: {
            whoami: 'Who am I?',
            intro: 'Hello! My name is David Corral Plaza, I\'m ' + age + '  years old, and I\'m from Cádiz. Nowadays, I\'m working as a Rust Software Engineer at Radancy. Before that, I worked at Xebia (47 Degrees) for 5 years as a Scala Software Engineer. Also, before landing at 47, I was a researcher at the University of Cádiz thanks to a grant that funded the development of my Ph.D. thesis for almost 4 years.',
            likes: 'I like a bunch of things, let me show you some of them:',
            animals: 'Animals',
            drone: 'Drone photography',
            adventure: 'Adventures',
            dinosaurs: 'Dinosaurs',
            football: 'Football',
            motorbikes: 'Motorbikes',
            videogames: 'Video games',
            travel: 'Travel',
            education: 'Educational Background',
            education_text: 'I like to think that you never stop learning, but regarding academic certificates, in 2016 I finished my Bachelor\'s Degree in Computer Engineering at the University of Cadiz (UCA), then, in 2017, I completed my Master\'s Degree Software Engineering and Technology at the University of Seville (US), with the best academic record. Finally, I devoted a few years to complete my Ph.D. Degree in Computer Engineering at the UCA, with the ',
            education_text_2: ' distinction.',
            phd: 'Ph.D. Degree',
            computer_eng: 'Computer Engineering',
            phd_dates: 'November 2017 - March 2021',
            uca: 'University of Cadiz',
            master: 'Master\'s Degree',
            software_eng: 'Software Engineering and Technology',
            master_dates: 'October 2016 - July 2017',
            us: 'University of Seville',
            degree: 'Bachelor\'s Degree',
            degree_dates: 'October 2012 - July 2016',
            professional: 'Professional Experience',
            professional_text_1: 'I\'m currently a Software Engineer at Radancy, where I primarily work with the Rust programming language, specializing in back-end engineering. I work with modern technologies such as AWS, Kubernetes, Docker, Redis, PostgreSQL, and Kafka.',
            professional_text_2: 'Previously, I worked as a Software Engineer at Xebia for five years, specializing in Scala. Most of my work involved supporting North American fintech clients as a consultant.',
            professional_text_3: 'I also worked as a predoctoral researcher at University of Cádiz. During that time, I worked on my PhD thesis and taught several courses in the Computer Engineering degree program. Before that, during my final undergraduate year, I completed an internship as a Full-Stack and Android developer within one of the university’s departments.',
            software_engineer: 'Senior Software Engineer',
            rust_engineer: 'Rust Software Engineer',
            fortyseven_dates: 'May 2021 - May 2025',
            radancy_dates: 'May 2026 - now',
            postdoctoral: 'Pre & Postdoctoral Researcher',
            uca_dates: 'November 2017 - May 2021',
            fullstack: 'Full Stack and Android Developer',
            fullstack_dates: 'December 2015 - July 2016',
            social: 'Social Networks',
            social_text: 'I mostly use X (Twitter) for memes, news, and (occasionally) personal reflections. LinkedIn as a place to track colleagues and friends in a business way. GitHub for all my work stuff. Stack Overflow daily.',
            contact: 'Contact me',
            contact_text: 'If you want to get in touch with me, I would recommend you to send me an email to my personal account, which is: ',
            year: year
        }
    },
    es: {
        message: {
            whoami: 'Sobre mí',
            intro: 'Hola! Mi nombre es David Corral Plaza, tengo ' + age + ' años y soy de Cádiz (España). Actualmente, trabajo como Ingeniero del Software en Rust en Radancy. Antes, estuve 5 años en Xebia (antes conocido como 47 Degrees) como Ingeniero del Software en Scala. Finalmente, antes de mi paso por 47, fui investigador en la Universidad de Cádiz gracias a una beca que financió el desarollo de mi tesis doctoral durante casi 4 años.',
            likes: 'Me gustan muchas cosas, déjame que te muestre algunas de ellas:',
            animals: 'Animales',
            drone: 'Fotografía con Drones',
            adventure: 'Aventuras',
            dinosaurs: 'Dinosaurios',
            football: 'Fútbol',
            motorbikes: 'Motos',
            videogames: 'Videojuegos',
            travel: 'Viajar',
            education: 'Formación Académica',
            education_text: 'Me gusta pensar que uno nunca para de aprender, pero sobre temas académicos, en 2016 terminé mi Grado en Ingeniería Informática en la Universidad de Cádiz (UCA), después, en 2017, completé mi Máster en Ingeniería y Tecnología del Software en la Universidad de Sevilla (US), con el Premio Extraordinario de Fin de Máster. Finalmente, dediqué unos años a completar mi Doctorado en Ingeniería Informátoca, en la UCA, con el distintivo ',
            education_text_2: ' Sobresaliente.',
            phd: 'Doctorado',
            computer_eng: 'Ingeniería Informática',
            phd_dates: 'Noviembre 2017 - Marzo 2021',
            uca: 'Universidad de Cadiz',
            master: 'Máster',
            software_eng: 'Ingeniería y Tecnología del Software',
            master_dates: 'Octubre 2016 - Julio 2017',
            us: 'Universidad de Sevilla',
            degree: 'Grado',
            degree_dates: 'Octubre 2012 - Julio 2016',
            professional: 'Experiencia Profesional',
            professional_text_1: 'Actualmente soy Ingeniero del Software en Radancy. Trabajo principalmente en el lenguage de programación Rust, especializado en ingeniería de back-end, utilizando tecnologías de última generación como AWS, K8S, Docker, Redis, Postgres, Kafka.',
            professional_text_2: 'Anteriormente, he trabajado como Ingeniero del Software en Xebia, especializado en el lenguaje de programación Scala, durante 5 años. Principalmente dando soporte como consultor a clientes Norteamericanos en el sector de Fintech.',
            professional_text_3: 'También he sido investigador predoctoral en la UCA. Durante esos años, trabajé en mi tesis doctoral e impartí algunas asignaturas del Grado en Ingeniería Informática en la UCA. Antes de todo eso, en mi último año de Grado, realicé unas prácticas como desarrollador Full-Stack y Android en un departamento de la propia universidad.',
            software_engineer: 'Ingeniero del Software Senior',
            rust_engineer: 'Ingeniero del Software en Rust',
            fortyseven_dates: 'Mayo 2021 - Mayo 2026',
            postdoctoral: 'Investigador Pre & Postdoctoral',
            uca_dates: 'Noviembre 2017 - Mayo 2021',
            fullstack: 'Desarrollador Full Stack y Android',
            fullstack_dates: 'Diciembre 2015 - Julio 2016',
            radancy_dates: 'Mayo 2026 - Actualidad',
            social: 'Redes Sociales',
            social_text: 'Uso principalmente X (Twitter) para memes, noticias, y (de vez en cuando) reflexiones personales. LinkedIn lo utilizo para seguir a colegas y amigos en temas empresariales. GitHub para todo lo relacionado con mi propio trabajo. Stack Overflow todos los días.',
            contact: 'Contáctame',
            contact_text: 'Si quieres ponerte en contacto conmigo, te invito a que me escribas un email a mi cuenta personal, que es: ',
            year: year
        }
    }
}

const i18n = new VueI18n({
    locale: 'en',
    messages,
})


var app = new Vue({
    i18n,
    el: '#app',
    methods: {
        switchTheme: function (event) {
            $('.bg-dark, .bg-white').toggleClass('bg-dark bg-white');
            $('.text-white, .text-dark').toggleClass('text-white text-dark');
            $('.themeMode').toggle();
            $('.email').toggle();
        }
    }
})

$('.locale').click(function () {
    if (i18n.locale == 'en') {
        i18n.locale = 'es';
        $('.locale').prop("src", 'img/en.png');
    } else {
        i18n.locale = 'en';
        $('.locale').prop("src", 'img/es.png');
    }
})
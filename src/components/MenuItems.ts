export const MenuItems = [
    {
        title:'Strona Główna',
        url:'/homepage',
        role: 'NotLogged',
    },
    {
        title: 'Panel użytkownika',
        url: '/homePageDonator',
        role: 'Donator',
    },
    {
        title: 'Wybór stanowiska',
        url: '/homePageWorker',
        role: 'Worker',
    },
    {
        title:'Kontakt',
        url:'/contact',
        role: 'None',
    },
    {
        title:'Potrzebna krew',
        url:'/bloodNeeded',
        role: 'None',
    },
    {
        title:'Informacje',
        url:'/informations',
        role: 'None',
    },
    {
        title:'Proces oddawania krwi',
        url:'/bloodDonatingProcess',
        role: 'None',
    },
    {
        title:'Zaloguj się',
        url:'/signIn',
        role: 'NotLogged',
    },
    {
        title: 'Wyloguj',
        url: '/signOut',
        role: 'Worker',
    },
    {
        title: 'Wyloguj',
        url: '/signOut',
        role: 'Donator',
    },
]
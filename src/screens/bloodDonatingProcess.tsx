import styled from '@emotion/styled';
import React from 'react';

const Article = styled.div`
    padding: 50px;
    text-align: left;
    h2 {
        color: #ff2003;
        font-size: 30px;
        font-weight: bold;
    };
    h3 {
        font-weight: bold;
        font-size: 25px;
    }
`;




export const BloodDonatingProcess: React.FC = () => {
    return(
        <Article>
            <h2>
                Proces oddawania krwi.
            </h2>
            
            <h3>
                Przed oddaniem krwi:
            </h3>
            <p>
            Zanim udasz się do centrum krwiodawstwa musisz pamiętać o kilku ważnych 
            rzeczach. Sprawdź czy możesz zostać dawcą, zapoznaj się z wytycznymi, 
            które mówią, kto może a kto nie może oddawać krwi: przeciwwskazania do 
            oddawania oraz przykładowe ankiety dla kandydatów na dawców. Jeżeli 
            stwierdzisz, że możesz oddać krew, zaplanuj dzień w którym to zrobisz.
            </p>

            <ol>
                <li>Sprawdź, w jakie dni i w jakich godzinach jest czynne centrum/punkt, w którym chcesz oddać krew.</li>
                <li>Wybierz dzień, przed którym będziesz mógł wypocząć – wyspać się. Zarezerwuj sobie około godziny czasu.</li>
                <li>Koniecznie zjedz lekki posiłek przed oddaniem krwi (unikaj pokarmów zawierających dużą ilość tłuszczu)</li>
                <li>Pij dużo soków owocowych i wody.</li>   
                <li>Unikaj nadmiernego fizycznego wysiłku przed oddaniem krwi.</li>   
                <li>Jeżeli wybierasz się po raz pierwszy zabierz ze sobą kogoś do towarzystwa, poczujesz się pewniej a przede wszystkim bezpieczniej.</li>
                <li>Weź dowód tożsamości i jeżeli masz legitymację honorowego dawcy krwi.</li>
            </ol>

            <h3>
                Oddawanie krwi krok po kroku:
            </h3>

            <ol>
                <li><b>Skorzystaj z szatni.</b> Do stacji najlepiej przyjść w „luźnym” ubraniu, które pozwoli na łatwe odsłonięcie ramienia.</li>
                <li><b>Rejestracja</b> – Zgłoś się do rejestracji dawców i odbierz kwestionariusz z pytaniami o twój stan zdrowia. Powyższy dokument nalezy dokładnie wypełnić. Ważne jest również, aby podczas rejestracji podać aktualny adres do korespondencji i numer telefonu. Osoba otrzymuje również opaskę identyfikacyjną, którą rejestratorka zakłada dawcy na nadgarstek.</li>
                <li><b>Badanie poziomu hemoglobiny</b> – po rejestracji należy przejść na stanowisko laboratoryjne, gdzie zostanie oznaczony poziom hemoglobiny oraz ewentualnie zostaną pobrane próbki do badań.</li>
                <li><b>Gabinet lekarski</b> – Po kilku minutach zostaniesz wezwany do gabinetu lekarskiego, gdzie lekarz przeprowadzi badanie lekarskie. Osoba ta zakwalifikuje Cię do oddawania krwi lub jej składników, albo wyjaśni dlaczego dziś nie możesz oddać krwi. Jeśli masz jakiekolwiek wątpliwości, zawsze pytaj lekarza lub pielęgniarkę w centrum: to najlepszy i najpewniejszy sposób uzyskania fachowych i wyczerpujących informacji na dany temat.</li>
                <li><b>Przygotowanie do pobrania</b> – Po wyjściu od lekarza w zależności od punktu krwiodawstwa oraz liczby dawców oczekujesz w poczekalni na wezwanie do sali pobrań albo udajesz się do niej bezpośrednio. Powinien tam być umieszczony dozownik z wodą z którego możesz skorzystać oraz pojemnik z obuwiem jednorazowym. Przed oddawaniem krwi wybierz rękę, z której chcesz oddawać krew i umyj ją specjalnym płynem.</li>
                <li><b>Sala pobrań</b> – W sali pobrań usiądź wygodnie na fotelu. Zostanie założone wkłucie a krew samoczynnie zacznie napełniać pojemnik. Pamiętaj: oddawanie krwi jest bezpieczne – podczas donacji używany jest tylko sprzęt jednorazowego użytku, bezbolesne – większość ludzi czuje jedynie lekkie ukłucie igłą. Zanim minie 10 minut oddasz jedną jednostkę krwi (450ml). Oddawanie składników krwi różni się czasem i technicznym sposobem pobierania.</li>
                <li><b>Poczekalnia</b> – Po oddaniu krwi należy odczekać 15 minut. W rejestracji odbierz czekolady, które mają uzupełnić ubytek energetyczny. Możesz też otrzymać zaświadczenie zwalniające w dniu oddania krwi z pracy lub szkoły, a także zwrot kosztów podróży. Cały proces oddawania krwi pełnej trwa zwykle mniej niż jedną godzinę.</li>
            </ol>

            <h3>
                Po oddaniu krwi:
            </h3>
            
            <ol>
                <li>Po oddaniu krwi zastosuj się do poleceń personelu. Tak jak wspomniano wyżej odpocznij kilkanaście minut w punkcie, zjedz czekoladę, wypij sok.</li>
                <li>Skorzystaj jeżeli potrzebujesz z dnia wolnego, jaki przysługuje Ci w dniu oddania krwi.</li>
                <li>Unikaj nadmiernego obciążenia ręki, z której pobrano krew.</li>
                <li>Jedz regularnie posiłki; pamiętaj, aby dieta była bogatsza w węglowodany tego dnia.</li>
                <li>Dużo odpoczywaj: pamiętaj, że nie jesteś maszyną, oddanie krwi jest obciążeniem dla Twojego organizmu. Co prawda każdy organizm może reagować inaczej. Jedna osoba nie odczuwa zmęczenia inna odwrotnie.</li>
                <li>Unikaj szybkiej zmiany pozycji z leżącej na stojącą.</li>
                <li>Staraj się nie wykonywać obciążających prac domowych. Unikaj wysiłku fizycznego.</li>
            </ol>

        </Article>
    );
}
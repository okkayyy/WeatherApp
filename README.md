# WeatherApp

## 1. Opis projektu

WeatherApp to aplikacja pogodowa umożliwiająca użytkownikom sprawdzanie informacji o pogodzie w wybranych miastach.

Projekt realizowany jest zespołowo w ramach przedmiotu **Zarządzanie projektem wdrożeniowym**.

Aplikacja została zaprojektowana w formie przejrzystego dashboardu pogodowego, prezentującego najważniejsze informacje o aktualnych warunkach pogodowych oraz prognozę na kolejne godziny i dni.

## 2. Funkcjonalności aplikacji

Aplikacja oferuje następujące funkcjonalności:

- Wyświetlanie danych pogodowych dla pięciu miast: Londynu, Tokio, Nowego Jorku, Warszawy i Reykjaviku.
- Prezentowanie aktualnej temperatury i odczuwalnej temperatury.
- Wyświetlanie warunków pogodowych.
- Prezentowanie dodatkowych parametrów, takich jak wilgotność, prędkość i kierunek wiatru oraz ciśnienie atmosferyczne.
- Wyświetlanie prognozy godzinowej w formie wykresu słupkowego.
- Prezentowanie pięciodniowej prognozy temperatur minimalnych i maksymalnych.
- Aktualizowanie danych pogodowych po zmianie wybranego miasta.

**Uwaga:** Aplikacja wykorzystuje demonstracyjną bazę przykładowych danych pogodowych (Mock Data). Nie pobiera aktualnych danych z zewnętrznego serwisu meteorologicznego.

## 3. Wykorzystywane technologie

### Technologie aplikacji
- **HTML5** – struktura strony i elementów interfejsu.
- **CSS3** – stylowanie i wygląd dashboardu.
- **JavaScript (ES6+)** – logika aplikacji, obsługa danych pogodowych i aktualizacja interfejsu.

### Narzędzia zarządzania projektem
- **Git** – kontrola wersji kodu.
- **GitHub** – przechowywanie kodu, współpraca zespołowa i obsługa Pull Requestów.
- **Trello** – planowanie zadań, podział obowiązków i monitorowanie postępów.

## 4. Uruchomienie projektu

Aplikacja nie wymaga instalowania dodatkowych bibliotek ani konfigurowania serwera backendowego.

Aby uruchomić projekt:

1. Sklonuj repozytorium lub pobierz jego zawartość.
2. Otwórz folder projektu.
3. Uruchom plik `index.html` w przeglądarce internetowej.

Alternatywnie możesz otworzyć folder projektu w Visual Studio Code i uruchomić aplikację za pomocą rozszerzenia Live Server.

## 5. Struktura zespołu i podział obowiązków

Projekt realizowany jest przez pięcioosobowy zespół.

- **Daniil Mylenko – Kierownik projektu:** konfiguracja repozytorium, zarządzanie tablicą Trello, przygotowanie struktury HTML (`index.html`), Code Review i scalanie Pull Requestów.
- **Vladyslav Tyminskyi:** stylowanie interfejsu dashboardu (`styles.css`).
- **Yehor Storchylo:** moduł zarządzania danymi pogodowymi (`apiManager.js`).
- **Bogdan Moskovchenko:** logika aktualizacji interfejsu użytkownika (`uiUpdater.js`).
- **Arsen Khudyk:** moduł prognozy pogody (`forecastWidget.js`).

### Zarządzanie projektem

Zadania zespołu i postępy prac są monitorowane za pomocą tablicy Trello:

https://trello.com/b/6afe0008e4af7ba487f1245

## 6. Status projektu

Projekt znajduje się na etapie realizacji i integracji poszczególnych modułów aplikacji.

Zespół wykorzystuje Git i GitHub do kontroli wersji, pracy na osobnych gałęziach oraz przeglądu i scalania zmian za pomocą Pull Requestów.

Dalszym etapem jest zakończenie integracji wszystkich modułów, przetestowanie aplikacji i przygotowanie końcowej wersji projektu.

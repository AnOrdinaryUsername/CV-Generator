import Header from '../features/navbar/screens/Header';
import PrintButton from '../shared/Button/PrintButton';

function App() {
    document.documentElement.setAttribute('data-theme', 'light');

    return (
        <>
            <Header />
            <main>
                <PrintButton />
            </main>
        </>
    );
}

export default App;

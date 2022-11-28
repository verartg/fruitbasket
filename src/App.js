//Ik ben gekomen tot opdracht 3 en heb componenten gemaakt voor de reset- en verzend button en de +/-counter

import React, {useState} from 'react';
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import './App.css';

function App() {
    const [ strawberries, setStrawberries ] = useState( 0);
    const [ bananas, setBananas ] = useState( 0);
    const [ apples, setApples ] = useState( 0);
    const [ kiwis, setKiwis ] = useState( 0);
    function reset() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('0');
    const [zipValue, setZipValue] = React.useState('');
    const [frequency, toggleFrequency] = React.useState('week');
    const [timeslot, toggleTimeslot] = React.useState('Overdag')
    const [remarksValue, setRemarksValue] = React.useState('');
    const [termsConditions, toggleTermsConditions] = React.useState(false);
    //const handleChange = () => { toggleTermsConditions(!termsConditions);};] <-- Vraag: Hoe kan de checkbox ook weer uitvinken zonder deze statement?
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            `Aantal aardbeien: ${strawberries}
            Aantal bananen: ${bananas}
            Aantal appels: ${apples}
            Aantal kiwi's: ${kiwis}
            Voornaam: ${firstNameValue}
            Achternaam: ${lastNameValue}
            Leeftijd: ${ageValue}
            Postcode: ${zipValue}
            Bezorgfrequentie: ${frequency}
            Tijdslot: ${timeslot}
            Opmerking: ${remarksValue}
            Akkoord: ${termsConditions}
        `);
    }

        return (
        <>
            <h1>Fruitmand bezorgservice</h1>
                <section>
                    <aricle>
                        <p>🍓 Aardbeien</p>
                        <Counter
                            fruitCount={strawberries}
                            setFruitCount={setStrawberries}
                        />

                    </aricle>
                    <aricle>
                        <p>🍌 Bananen</p>
                        <Counter
                            fruitCount={bananas}
                            setFruitCount={setBananas}
                        />
                    </aricle>
                    <aricle>
                        <p>🍏 Apples</p>
                        <Counter
                            fruitCount={apples}
                            setFruitCount={setApples}
                        />
                    </aricle>
                    <aricle>
                        <p>🥝 Kiwis</p>
                        <Counter
                            fruitCount={kiwis}
                            setFruitCount={setKiwis}
                        />
                    </aricle>
                    <Button type="button" clickHandler={reset} >Reset</Button>
                </section>

            <form onSubmit = {handleSubmit}>
                   <section>
                    <label htmlFor="first-name-field">Voornaam</label>
                        <input
                            type="text"
                            id="first-name-field"
                            name="first-name"
                            value={firstNameValue}
                            onChange={(e) => setFirstNameValue(e.target.value)}
                        />
                   </section>
                    <section>
                    <label htmlFor="last-name-field">Achternaam</label>
                        <input
                            type="text"
                            id="last-name-field"
                            name="last-name"
                            value={lastNameValue}
                            onChange={(e) => setLastNameValue(e.target.value)}
                        />
                    </section>
                    <section>
                    <label htmlFor="age-field">Leeftijd</label>
                        <input
                            type="number"
                            id="age-field"
                            name="age"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </section>
                    <section>
                        <label htmlFor="zip-code-field">Postcode</label>
                        <input
                            type="text"
                            id="zip-code-field"
                            name="zip-code"
                            value={zipValue}
                            onChange={(e) => setZipValue(e.target.value)}
                        />
                    </section>
                    <section>
                        <label htmlFor="selectFrequency">Bezorgfrequentie</label>
                    </section>
                    <section>
                        <select
                            name="selectFrequency"
                            id="selectFrequency"
                            value={frequency}
                            onChange={(e) => toggleFrequency(e.target.value)}
                        >
                                <option value="every-week">Iedere week</option>
                                <option value="every-other-week">Om de week</option>
                                <option value="every-month">Iedere maand</option>
                        </select>
                    </section>
                    <section>
                        <input
                            type="radio"
                            value="during the day"
                            name="timeslot"
                            id="timeslot-day"
                            checked={timeslot === 'during the day'}
                            onChange={(e) => toggleTimeslot(e.target.value)}
                        />
                        <label htmlFor="timeslot-day">Overdag</label>
                    </section>
                    <section>
                        <input
                            type="radio"
                            value="during the evening"
                            name="timeslot"
                            id="timeslot-night"
                            checked={timeslot === 'during the evening'}
                            onChange={(e) => toggleTimeslot(e.target.value)}
                        />
                        <label htmlFor="timeslot-night">'s Avonds'</label>
                    </section>
                    <section>
                    <label htmlFor="remarks-field">Opmerking</label>
                        <textarea
                            id="remarks-field"
                            name="remarks"
                            value={remarksValue}
                            onChange={(e) => setRemarksValue(e.target.value)}
                            rows={6}
                            cols={40}
                        />
                    </section>
                    <section>
                        <input
                            type="checkbox"
                            id="terms-conditions"
                            name="conditions"
                            value={termsConditions}
                            onChange={(e) => toggleTermsConditions(e.target.checked)}
                        />
                        <label htmlFor="terms-conditions">Ik ga akkoord met de voorwaarden</label>
                    </section>
                    <Button type = 'submit'>Verzend</Button>
                </form>
    </>
  );
}

export default App;

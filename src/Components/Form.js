import { useState } from "react";

export function Form() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName("");
        setLastName("");
    }
    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                title: e.target.value
            }
        });
    }
    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                city: e.target.value
            }
        });
    }
    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <h1>
                    Hi, {firstName} {lastName}
                </h1>
                <button onClick={handleReset}>Reset</button>
            </form>
            <br/>
            <label>
                Name : <input value={person.name} onChange={handleNameChange} />
            </label>
            <label>
                Title : <input value={person.artwork.title} onChange={handleTitleChange} />
            </label>
            <label>
                City : <input value={person.artwork.city} onChange={handleCityChange} />
            </label>
            <label>
                Image : <input value={person.artwork.image} onChange={handleImageChange} />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br></br>
                (located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} ></img>
        </>
    );
}
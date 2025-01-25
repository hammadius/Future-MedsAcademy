import React from 'react';
import './UniversitiesPage.css';  // Ensure the CSS file is linked

const UniversitiesPage = () => {
    return (
        <div className="universities-container">
            <h1>Universities Offering Medicine and Surgery Programs in English in Italy</h1>
            <div className="region">
                <h2>Southern Italy and Islands</h2>
                <ul>
                    <li><a href="https://www.unina.it/" target="_blank" rel="noopener noreferrer">University of Naples Federico II (Università degli Studi di Napoli Federico II) - Naples</a></li>
                    <li><a href="https://www.unicampania.it/" target="_blank" rel="noopener noreferrer">University of Campania "Luigi Vanvitelli" (Università degli Studi della Campania "Luigi Vanvitelli") - Naples</a></li>
                    <li><a href="https://www.unime.it/" target="_blank" rel="noopener noreferrer">University of Messina (Università degli Studi di Messina) - Messina, Sicily</a></li>
                    <li><a href="https://www.unict.it/" target="_blank" rel="noopener noreferrer">University of Catania (Catania, Italy)</a></li>
                    <li><a href="https://www.uniba.it/" target="_blank" rel="noopener noreferrer">University of Bari Aldo Moro (Università degli Studi di Bari Aldo Moro) - Bari</a></li>
                </ul>
            </div>
            <div className="region">
                <h2>Central Italy</h2>
                <ul>
                    <li><a href="https://www.uniroma1.it/" target="_blank" rel="noopener noreferrer">Sapienza University of Rome (Università di Roma La Sapienza) - Rome</a></li>
                    <li><a href="https://www.uniroma2.it/" target="_blank" rel="noopener noreferrer">Tor Vergata University of Rome (Università degli Studi di Roma Tor Vergata) - Rome</a></li>
                    <li><a href="https://www.unibo.it/" target="_blank" rel="noopener noreferrer">University of Bologna (Università di Bologna) - Bologna</a></li>
                    <li><a href="https://www.unisi.it/" target="_blank" rel="noopener noreferrer">University of Siena (Università degli Studi di Siena) - Siena</a></li>
                </ul>
            </div>
            <div className="region">
                <h2>Northern Italy</h2>
                <ul>
                    <li><a href="https://www.unimi.it/" target="_blank" rel="noopener noreferrer">University of Milan (Università degli Studi di Milano) - Milan</a></li>
                    <li><a href="https://www.unipv.it/" target="_blank" rel="noopener noreferrer">University of Pavia (Università degli Studi di Pavia) - Pavia</a></li>
                    <li><a href="https://www.unipd.it/" target="_blank" rel="noopener noreferrer">University of Padua (Università degli Studi di Padova) - Padua</a></li>
                    <li><a href="https://www.unito.it/" target="_blank" rel="noopener noreferrer">University of Turin (Università degli Studi di Torino) - Turin</a></li>
                    <li><a href="https://www.hunimed.eu/" target="_blank" rel="noopener noreferrer">Humanitas University - Milan (Private university)</a></li>
                    <li><a href="https://www.unisr.it/" target="_blank" rel="noopener noreferrer">Vita-Salute San Raffaele University - Milan (Private university)</a></li>
                </ul>
            </div>
        </div>
    );
};

export default UniversitiesPage;

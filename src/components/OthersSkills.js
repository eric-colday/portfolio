import React, { Component } from 'react';

class OthersSkills extends Component {
    render() {
        return (
            <div className="othersSkills">
                <h3>Autres compétences</h3>
                <div className="list">
                    <ul>
                        <li>
                            <i className="fas fa-check-square"></i>
                            Anglais professionnel
                        </li>
                        <li>
                            <i className="fas fa-check-square"></i>
                            Github
                        </li>
                        <li>
                            <i className="fas fa-check-square"></i>
                            Methodes agiles
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i className="fas fa-check-square"></i>
                            Figma
                        </li>
                        <li>
                            <i className="fas fa-check-square"></i>
                            UI/UX Design
                        </li>
                        <li>
                            <i className="fas fa-check-square"></i>
                            Canva.com
                        </li>
                        <li>
                            <i className="fas fa-check-square"></i>
                            Montage vidéo
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default OthersSkills;
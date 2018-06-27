import React, { Component } from 'react';
import Header from './components/Header'
import IconCard from './components/IconCard'
import './App.css'
import Jumbotron from './components/Jumbotron'


//sets our state to 0 or emtpy
class App extends Component {
    state = {
        counter: 0,
        skins: [
            {
                id: 1,
                name: "skin1",
                selected: false
            },
            {
                id: 2,
                name: "skin2",
                selected: false
            }
            ,
            {
                id: 3,
                name: "skin3",
                selected: false
            }
            ,
            {
                id: 4,
                name: "skin4",
                selected: false
            }
            ,
            {
                id: 5,
                name: "skin5",
                selected: false
            }
            ,
            {
                id: 6,
                name: "skin6",
                selected: false
            }
            ,
            {
                id: 7,
                name: "skin7",
                selected: false
            }
            ,
            {
                id: 8,
                name: "skin8",
                selected: false
            },
            {

                id: 9,
                name: "skin9",
                selected: false
            },
            {
                id: 10,
                name: "skin10",
                selected: false
            },
            {
                id: 11,
                name: "skin11",
                selected: false
            },
            {
                id: 12,
                name: "skin12",
                selected: false
            }

        ],

        message: ''

    };

    counterCheck = (name, selectedState) => {
        //truffle shuffle function
        let skinsArray = this.state.skins;
        let {counter} = this.state;
        if (counter === 0){
            this.setState({message:''})
        }
        skinsArray.sort(function (a, b) { return 0.5 - Math.random() });

        if (selectedState) {
            //this line is the reset
            this.reset()
            this.setState({message: 'You lose!'})
        } else {
            counter = counter + 1
            skinsArray.forEach((skin) => {
                if (skin.name === name) {
                    skin.selected = true;
                    this.setState({
                        skins: skinsArray,
                        counter
                     })
                }

            });
            if (counter === 12){
                this.reset();
                this.setState({message: 'You win!'})
            } 
        }
    

    };

    reset(){
        const {skins} = this.state;
        skins.forEach(skin => skin.selected = false);
            this.setState({ skins, counter: 0 })
    }

    render() {
        return (
            <wrapper>
                <Jumbotron />
                <Header message = {this.state.message} score={this.state.counter} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.skins.map((skin) =>
                            <IconCard
                                key={skin.id}
                                id={skin.id}
                                icon={skin.name}
                                selected={skin.selected}
                                counterCheck={this.counterCheck} />)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;
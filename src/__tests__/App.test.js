import React from "react";
import { createStore } from "redux";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import middleware from '../middleware';
import { Provider } from 'react-redux';
import { reducers } from '../reducers';
import { MemoryRouter } from 'react-router';
import { connect } from 'react-redux';
import App from "../components/App";


const store = createStore(reducers, middleware)

describe('Tessing of testing', ()=> {
   
    it('Test Redux', ()=> {
        const {getByText} = render(
            <Provider store={store}>
                <MemoryRouter>
                    <App/>
                </MemoryRouter>
            </Provider>
        )
    
        expect(getByText(/Leaderboard/i)).toBeInTheDocument()
    
    })


    it('Test Redux Snapshot', ()=> {
          
        const component = render(
                <Provider store={store}>
                    <MemoryRouter>
                        <App />
                    </MemoryRouter>
                </Provider>
            )
              
        expect(component).toMatchSnapshot();
    })
})
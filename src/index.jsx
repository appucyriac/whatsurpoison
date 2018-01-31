import { renderReact } from 'hypernova-react';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import hydrate from 'react-dom';
import Home from './Home';
import Login from './Login';
import Browse from './Browse';


renderReact('Home',Home);
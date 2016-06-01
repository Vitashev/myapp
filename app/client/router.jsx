import React from 'react';
import { mount } from 'react-mounter';
import {Meteor} from 'meteor/meteor';
import {MainLayout} from '../imports/ui/layouts/main.layout.jsx'
import App from '../imports/ui/components/app.jsx'
import About from '../imports/ui/components/about.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});

FlowRouter.route('/about', {
    action(){
        mount(MainLayout, {
            content: (<About />)
        })
    }
});
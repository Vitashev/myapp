import React from 'react';
import { mount } from 'react-mounter';
import {Meteor} from 'meteor/meteor';
import {MainLayout} from '../imports/ui/layouts/main.layout.jsx'
import App from '../imports/ui/components/app.jsx'
import About from '../imports/ui/components/about.jsx'
import ResolutionDetail from '../imports/ui/components/resolution-detail.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />),
            title:"This is the main page"
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

FlowRouter.route('/resolution/:id', {
    action(params){
        mount(MainLayout, {
            content: (<ResolutionDetail id={params.id}/>)
        })
    }
});
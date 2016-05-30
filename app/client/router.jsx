import React from 'react';
import { mount } from 'react-mounter';

import {MainLayout} from '../imports/ui/layouts/main.layout.jsx'
import App from '../imports/ui/components/app.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});
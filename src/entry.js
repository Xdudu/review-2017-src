import React from 'react'
import { render } from 'react-dom'

import Seed from './seed.js'

import './index.css'


render(<Seed numMin="0" numMax="3600" />, document.getElementById('root'))
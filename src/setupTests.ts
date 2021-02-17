// @ts-nocheck

import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

global.MutationObserver = global.window.MutationObserver

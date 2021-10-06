// setupTests.js
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;

// MutationObserver library
// monitoramento de alterações no DOM da página.

/* types of tests
1.End to End:
A helper robot that behaves like a user to click around the app and verify that it functions correctly.
Sometimes called "functional testing" or e2e.
run the entire application (both frontend and backend) 

2.Integration:
Verify that several units work together in harmony.

3.Unit:
Verify that individual, isolated parts work as expected.

4.Static:
Catch typos and type errors as you write the code.
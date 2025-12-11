// Sample data structure for onboarding steps
const onboardingData = {
    steps: [
        {
            id: 'oba-started-business-details',
            name: 'OBA: Started - Business details confirmed',
            type: 'main',
            subSteps: [
                {
                    id: 'reg-number',
                    name: 'Registration number',
                    type: 'sub',
                    dropOffs: [
                        { id: 'reg-number-invalid', name: 'Reg number invalid' },
                        { id: 'not-found-registry', name: 'Not found in registry' },
                        { id: 'already-registered', name: 'Already registered' },
                        { id: 'none-reg', name: 'None' }
                    ]
                },
                {
                    id: 'reg-document',
                    name: 'Registration document',
                    type: 'sub',
                    dropOffs: [
                        { id: 'reg-doc-uploaded-not-confirmed', name: 'Registration document uploaded, but not confirmed' },
                        { id: 'reg-doc-not-uploaded', name: 'Registration document not uploaded' }
                    ]
                },
                {
                    id: 'business-details',
                    name: 'Business details',
                    type: 'sub',
                    dropOffs: [
                        { id: 'business-details-started', name: 'Business details fill in started' },
                        { id: 'none-business', name: 'None' }
                    ]
                }
            ],
            weeklyData: {
                thisWeek: { cr: 95, users: 2850, dropOff: 5 },
                average: { cr: 92.6, users: 2778, dropOff: 7.4 },
                periods: [
                    { period: '11.05 - 17.05', cr: 90, users: 2700, dropOff: 10 },
                    { period: '18.05 - 24.05', cr: 91, users: 2730, dropOff: 9 },
                    { period: '25.05 - 31.05', cr: 92, users: 2760, dropOff: 8 },
                    { period: '01.06 - 07.06', cr: 94, users: 2820, dropOff: 6 },
                    { period: '08.06 - 14.06', cr: 96, users: 2880, dropOff: 4 }
                ]
            }
        },
        {
            id: 'biz-details-confirmed',
            name: 'Business details confirmed - Data collection completed',
            type: 'main',
            subSteps: [
                {
                    id: 'addresses',
                    name: 'Addresses',
                    type: 'sub',
                    dropOffs: []
                },
                {
                    id: 'lr-confirmation',
                    name: 'LR confirmation and declaration',
                    type: 'sub',
                    dropOffs: [
                        { id: 'lr-confirmation-screen', name: 'Legal Representatives Confirmation screen' },
                        { id: 'declare-lr-screen', name: 'Declare all Legal Representatives screen' },
                        {
                            id: 'not-lr-screen',
                            name: 'Not LR screen',
                            children: [
                                { id: 'poa-upload-drop', name: 'PoA upload drop' },
                                { id: 'business-extract-upload-drop', name: 'Business Extract upload drop' },
                                { id: 'not-lr-misclicked', name: 'Not LR misclicked' },
                                { id: 'not-lr-no-documents', name: 'Not LR has not documents' },
                                { id: 'not-lr-none', name: 'None' }
                            ]
                        }
                    ]
                },
                {
                    id: 'ownership',
                    name: 'Ownership',
                    type: 'sub',
                    dropOffs: [
                        { id: 'ubo-questionnaire', name: 'UBO Questionnaire screen' },
                        { id: 'ownership-structure', name: 'Ownership Structure screen' },
                        { id: 'ownership-chart', name: 'Ownership Structure Chart screen' }
                    ]
                },
                {
                    id: 'personal-details',
                    name: 'Personal details',
                    type: 'sub',
                    dropOffs: []
                },
                {
                    id: 'account-declined-biz',
                    name: 'Account Declined',
                    type: 'sub',
                    dropOffs: []
                }
            ],
            weeklyData: {
                thisWeek: { cr: 88, users: 2508, dropOff: 12 },
                average: { cr: 82, users: 2262, dropOff: 18 },
                periods: [
                    { period: '11.05 - 17.05', cr: 75, users: 2025, dropOff: 25 },
                    { period: '18.05 - 24.05', cr: 78, users: 2129, dropOff: 22 },
                    { period: '25.05 - 31.05', cr: 82, users: 2263, dropOff: 18 },
                    { period: '01.06 - 07.06', cr: 85, users: 2397, dropOff: 15 },
                    { period: '08.06 - 14.06', cr: 90, users: 2592, dropOff: 10 }
                ]
            }
        },
        {
            id: 'data-collection-completed',
            name: 'Data collection completed - Verification started',
            type: 'main',
            subSteps: [
                {
                    id: 'iban-shown',
                    name: 'IBAN shown',
                    type: 'sub',
                    dropOffs: []
                },
                {
                    id: 'verification-screen',
                    name: 'Verification screen',
                    type: 'sub',
                    dropOffs: [
                        {
                            id: 'reminder',
                            name: 'Reminder',
                            children: [
                                { id: 'reminder-modal', name: 'Reminder modal' },
                                { id: 'reminder-set', name: 'Reminder set' }
                            ]
                        },
                        { id: 'popular-questions-clicked', name: 'Popular questions clicked' },
                        { id: 'not-lr-verification', name: 'Not LR clicked on verification step' }
                    ]
                },
                {
                    id: 'verification-second-screen',
                    name: 'Verification second screen (only desktop)',
                    type: 'sub',
                    dropOffs: []
                },
                {
                    id: 'account-declined-verification',
                    name: 'Account Declined',
                    type: 'sub',
                    dropOffs: []
                }
            ],
            weeklyData: {
                thisWeek: { cr: 72, users: 1806, dropOff: 28 },
                average: { cr: 70.2, users: 1585, dropOff: 29.8 },
                periods: [
                    { period: '11.05 - 17.05', cr: 65, users: 1316, dropOff: 35 },
                    { period: '18.05 - 24.05', cr: 68, users: 1448, dropOff: 32 },
                    { period: '25.05 - 31.05', cr: 70, users: 1584, dropOff: 30 },
                    { period: '01.06 - 07.06', cr: 73, users: 1748, dropOff: 27 },
                    { period: '08.06 - 14.06', cr: 75, users: 1944, dropOff: 25 }
                ]
            }
        },
        {
            id: 'verification-started',
            name: 'Verification Started - Approved',
            type: 'main',
            subSteps: [
                { id: 'verification-not-finished', name: 'Verification not finished', type: 'sub', dropOffs: [] },
                { id: 'verification-repeat', name: 'Verification repeat', type: 'sub', dropOffs: [] },
                { id: 'verification-final-decline', name: 'Verification final decline', type: 'sub', dropOffs: [] }
            ],
            weeklyData: {
                thisWeek: { cr: 62, users: 1120, dropOff: 38 },
                average: { cr: 61.4, users: 972, dropOff: 38.6 },
                periods: [
                    { period: '11.05 - 17.05', cr: 58, users: 763, dropOff: 42 },
                    { period: '18.05 - 24.05', cr: 60, users: 869, dropOff: 40 },
                    { period: '25.05 - 31.05', cr: 61, users: 966, dropOff: 39 },
                    { period: '01.06 - 07.06', cr: 63, users: 1101, dropOff: 37 },
                    { period: '08.06 - 14.06', cr: 65, users: 1264, dropOff: 35 }
                ]
            }
        },
        {
            id: 'verification-approved',
            name: 'Verification Approved - Account opened',
            type: 'main',
            subSteps: [
                {
                    id: 'pricing-plan',
                    name: 'Pricing plan',
                    type: 'sub',
                    dropOffs: [
                        { id: 'main-pricing-screen', name: 'Main pricing screen' },
                        { id: 'change-plan-screen', name: 'Change plan screen' }
                    ]
                },
                {
                    id: 'cdd-review',
                    name: 'CDD review',
                    type: 'sub',
                    dropOffs: [
                        { id: 'in-review', name: 'In review' },
                        {
                            id: 'additional-questions',
                            name: 'Additional questions requested',
                            children: [
                                { id: 'additional-not-seen', name: 'Additional Questions not seen' },
                                { id: 'additional-not-started', name: 'Additional Questions not started' },
                                { id: 'additional-not-submitted', name: 'Additional Questions not submitted' }
                            ]
                        },
                        { id: 'account-declined-cdd', name: 'Account Declined' }
                    ]
                },
                {
                    id: 'qes',
                    name: 'QES',
                    type: 'sub',
                    dropOffs: [
                        { id: 'qes-not-started', name: 'Not started QES step' },
                        { id: 'qes-doc-acceptance', name: 'QES acceptance of the documents' },
                        { id: 'qes-sms', name: 'QES sms step' },
                        { id: 'qes-not-completed', name: 'Not eSign: Completed' },
                        { id: 'qes-error', name: 'QES Error' }
                    ]
                }
            ],
            weeklyData: {
                thisWeek: { cr: 55, users: 616, dropOff: 45 },
                average: { cr: 51, users: 501, dropOff: 49 },
                periods: [
                    { period: '11.05 - 17.05', cr: 40, users: 305, dropOff: 60 },
                    { period: '18.05 - 24.05', cr: 45, users: 391, dropOff: 55 },
                    { period: '25.05 - 31.05', cr: 50, users: 483, dropOff: 50 },
                    { period: '01.06 - 07.06', cr: 55, users: 606, dropOff: 45 },
                    { period: '08.06 - 14.06', cr: 65, users: 822, dropOff: 35 }
                ]
            }
        }
    ]
};

// Additional drop-off data for sub-steps
const dropOffData = {
    // Step 1: oba-started-business-details (dropOff: thisWeek 5%, periods: 10%, 9%, 8%, 6%, 4%)
    // Sub-step: reg-number (dropOff: thisWeek 2%, periods: 4%, 3.5%, 3%, 2%, 1.5%)
    'reg-number': {
        thisWeek: { dropOff: 2, users: 57 },
        average: { dropOff: 2.7, users: 75 },
        periods: [
            { dropOff: 4, users: 108 },
            { dropOff: 3.5, users: 96 },
            { dropOff: 3, users: 83 },
            { dropOff: 2, users: 56 },
            { dropOff: 1.5, users: 43 }
        ]
    },
    'reg-number-invalid': {
        thisWeek: { dropOff: 0.5, users: 14 },
        average: { dropOff: 0.7, users: 19 },
        periods: [
            { dropOff: 1, users: 27 },
            { dropOff: 0.9, users: 25 },
            { dropOff: 0.8, users: 22 },
            { dropOff: 0.5, users: 14 },
            { dropOff: 0.4, users: 12 }
        ]
    },
    'not-found-registry': {
        thisWeek: { dropOff: 0.5, users: 14 },
        average: { dropOff: 0.7, users: 19 },
        periods: [
            { dropOff: 1, users: 27 },
            { dropOff: 0.9, users: 25 },
            { dropOff: 0.7, users: 19 },
            { dropOff: 0.5, users: 14 },
            { dropOff: 0.4, users: 12 }
        ]
    },
    'already-registered': {
        thisWeek: { dropOff: 0.5, users: 14 },
        average: { dropOff: 0.7, users: 19 },
        periods: [
            { dropOff: 1, users: 27 },
            { dropOff: 0.9, users: 25 },
            { dropOff: 0.8, users: 22 },
            { dropOff: 0.5, users: 14 },
            { dropOff: 0.4, users: 12 }
        ]
    },
    'none-reg': {
        thisWeek: { dropOff: 0.5, users: 14 },
        average: { dropOff: 0.6, users: 17 },
        periods: [
            { dropOff: 1, users: 27 },
            { dropOff: 0.8, users: 22 },
            { dropOff: 0.7, users: 19 },
            { dropOff: 0.5, users: 14 },
            { dropOff: 0.3, users: 9 }
        ]
    },
    // Sub-step: reg-document (dropOff: thisWeek 2%, periods: 3.5%, 3%, 2.5%, 2%, 1.5%)
    'reg-document': {
        thisWeek: { dropOff: 2, users: 57 },
        average: { dropOff: 2.4, users: 66 },
        periods: [
            { dropOff: 3.5, users: 95 },
            { dropOff: 3, users: 82 },
            { dropOff: 2.5, users: 69 },
            { dropOff: 2, users: 56 },
            { dropOff: 1.5, users: 43 }
        ]
    },
    'reg-doc-uploaded-not-confirmed': {
        thisWeek: { dropOff: 1, users: 29 },
        average: { dropOff: 1.2, users: 33 },
        periods: [
            { dropOff: 1.8, users: 49 },
            { dropOff: 1.5, users: 41 },
            { dropOff: 1.3, users: 36 },
            { dropOff: 1, users: 28 },
            { dropOff: 0.8, users: 23 }
        ]
    },
    'reg-doc-not-uploaded': {
        thisWeek: { dropOff: 1, users: 29 },
        average: { dropOff: 1.2, users: 33 },
        periods: [
            { dropOff: 1.7, users: 46 },
            { dropOff: 1.5, users: 41 },
            { dropOff: 1.2, users: 33 },
            { dropOff: 1, users: 28 },
            { dropOff: 0.7, users: 20 }
        ]
    },
    // Sub-step: business-details (dropOff: thisWeek 1%, periods: 2.5%, 2.5%, 2.5%, 2%, 1%)
    'business-details': {
        thisWeek: { dropOff: 1, users: 29 },
        average: { dropOff: 2.1, users: 58 },
        periods: [
            { dropOff: 2.5, users: 68 },
            { dropOff: 2.5, users: 68 },
            { dropOff: 2.5, users: 69 },
            { dropOff: 2, users: 56 },
            { dropOff: 1, users: 29 }
        ]
    },
    'business-details-started': {
        thisWeek: { dropOff: 0.5, users: 14 },
        average: { dropOff: 1.1, users: 30 },
        periods: [
            { dropOff: 1.3, users: 35 },
            { dropOff: 1.3, users: 35 },
            { dropOff: 1.3, users: 36 },
            { dropOff: 1, users: 28 },
            { dropOff: 0.5, users: 14 }
        ]
    },
    'none-business': {
        thisWeek: { dropOff: 0.5, users: 14 },
        average: { dropOff: 1, users: 28 },
        periods: [
            { dropOff: 1.2, users: 32 },
            { dropOff: 1.2, users: 33 },
            { dropOff: 1.2, users: 33 },
            { dropOff: 1, users: 28 },
            { dropOff: 0.5, users: 14 }
        ]
    },
    // Step 2: business-details-data-collection (dropOff: thisWeek 12%, periods: 25%, 22%, 18%, 15%, 10%)
    // Sub-step: addresses (dropOff: thisWeek 2%, periods: 5%, 4.5%, 3.5%, 3%, 2%)
    'addresses': {
        thisWeek: { dropOff: 2, users: 50 },
        average: { dropOff: 3.5, users: 79 },
        periods: [
            { dropOff: 5, users: 101 },
            { dropOff: 4.5, users: 96 },
            { dropOff: 3.5, users: 79 },
            { dropOff: 3, users: 72 },
            { dropOff: 2, users: 52 }
        ]
    },
    // Sub-step: lr-confirmation (dropOff: thisWeek 3%, periods: 6%, 5.5%, 4.5%, 4%, 2.5%)
    'lr-confirmation': {
        thisWeek: { dropOff: 3, users: 75 },
        average: { dropOff: 4.5, users: 102 },
        periods: [
            { dropOff: 6, users: 122 },
            { dropOff: 5.5, users: 117 },
            { dropOff: 4.5, users: 102 },
            { dropOff: 4, users: 96 },
            { dropOff: 2.5, users: 65 }
        ]
    },
    'lr-confirmation-screen': {
        thisWeek: { dropOff: 1.5, users: 38 },
        average: { dropOff: 2.3, users: 52 },
        periods: [
            { dropOff: 3, users: 61 },
            { dropOff: 2.8, users: 59 },
            { dropOff: 2.3, users: 52 },
            { dropOff: 2, users: 48 },
            { dropOff: 1.3, users: 33 }
        ]
    },
    'declare-lr-screen': {
        thisWeek: { dropOff: 1.5, users: 38 },
        average: { dropOff: 2.2, users: 50 },
        periods: [
            { dropOff: 3, users: 61 },
            { dropOff: 2.7, users: 57 },
            { dropOff: 2.2, users: 50 },
            { dropOff: 2, users: 48 },
            { dropOff: 1.2, users: 31 }
        ]
    },
    // Sub-step: not-lr (dropOff: thisWeek 0%, periods: 0%, 0%, 0%, 0%, 0%)
    'not-lr': {
        thisWeek: { dropOff: 0, users: 0 },
        average: { dropOff: 0, users: 0 },
        periods: [
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 }
        ]
    },
    // Sub-step: ownership (dropOff: thisWeek 2%, periods: 4.5%, 4%, 3.5%, 3%, 2%)
    'ownership': {
        thisWeek: { dropOff: 2, users: 50 },
        average: { dropOff: 3.4, users: 77 },
        periods: [
            { dropOff: 4.5, users: 91 },
            { dropOff: 4, users: 85 },
            { dropOff: 3.5, users: 79 },
            { dropOff: 3, users: 72 },
            { dropOff: 2, users: 52 }
        ]
    },
    // Sub-step: personal-details (dropOff: thisWeek 2.5%, periods: 5.5%, 5%, 4%, 3.5%, 2.5%)
    'personal-details': {
        thisWeek: { dropOff: 2.5, users: 63 },
        average: { dropOff: 4.2, users: 95 },
        periods: [
            { dropOff: 5.5, users: 111 },
            { dropOff: 5, users: 106 },
            { dropOff: 4, users: 90 },
            { dropOff: 3.5, users: 84 },
            { dropOff: 2.5, users: 65 }
        ]
    },
    // Sub-step: account-declined-1 (dropOff: thisWeek 0.5%, periods: 4%, 3%, 2.5%, 1.5%, 1%)
    'account-declined-1': {
        thisWeek: { dropOff: 0.5, users: 13 },
        average: { dropOff: 2.4, users: 54 },
        periods: [
            { dropOff: 4, users: 81 },
            { dropOff: 3, users: 64 },
            { dropOff: 2.5, users: 57 },
            { dropOff: 1.5, users: 36 },
            { dropOff: 1, users: 26 }
        ]
    },
    // Step 3: data-collection-verification (dropOff: thisWeek 28%, periods: 35%, 32%, 30%, 27%, 25%)
    // Sub-step: continue-in-app (dropOff: thisWeek 6%, periods: 8%, 7.5%, 7%, 6.5%, 6%)
    'continue-in-app': {
        thisWeek: { dropOff: 6, users: 151 },
        average: { dropOff: 7, users: 111 },
        periods: [
            { dropOff: 8, users: 105 },
            { dropOff: 7.5, users: 109 },
            { dropOff: 7, users: 111 },
            { dropOff: 6.5, users: 114 },
            { dropOff: 6, users: 117 }
        ]
    },
    // Sub-step: continue-in-app-second (dropOff: thisWeek 5%, periods: 6.5%, 6%, 5.5%, 5%, 4.5%)
    'continue-in-app-second': {
        thisWeek: { dropOff: 5, users: 126 },
        average: { dropOff: 5.5, users: 87 },
        periods: [
            { dropOff: 6.5, users: 86 },
            { dropOff: 6, users: 87 },
            { dropOff: 5.5, users: 87 },
            { dropOff: 5, users: 88 },
            { dropOff: 4.5, users: 88 }
        ]
    },
    // Sub-step: reminder (dropOff: thisWeek 5.5%, periods: 7%, 6.5%, 6%, 5.5%, 5%)
    'reminder': {
        thisWeek: { dropOff: 5.5, users: 138 },
        average: { dropOff: 6.2, users: 98 },
        periods: [
            { dropOff: 7, users: 92 },
            { dropOff: 6.5, users: 94 },
            { dropOff: 6, users: 95 },
            { dropOff: 5.5, users: 97 },
            { dropOff: 5, users: 97 }
        ]
    },
    // Sub-step: popular-questions (dropOff: thisWeek 4.5%, periods: 6%, 5.5%, 5%, 4.5%, 4%)
    'popular-questions': {
        thisWeek: { dropOff: 4.5, users: 113 },
        average: { dropOff: 5.2, users: 82 },
        periods: [
            { dropOff: 6, users: 79 },
            { dropOff: 5.5, users: 80 },
            { dropOff: 5, users: 79 },
            { dropOff: 4.5, users: 79 },
            { dropOff: 4, users: 78 }
        ]
    },
    // Sub-step: not-lr-verification (dropOff: thisWeek 3%, periods: 4%, 3.5%, 3.5%, 3%, 2.5%)
    'not-lr-verification': {
        thisWeek: { dropOff: 3, users: 75 },
        average: { dropOff: 3.3, users: 52 },
        periods: [
            { dropOff: 4, users: 53 },
            { dropOff: 3.5, users: 51 },
            { dropOff: 3.5, users: 55 },
            { dropOff: 3, users: 53 },
            { dropOff: 2.5, users: 49 }
        ]
    },
    // Sub-step: account-declined-2 (dropOff: thisWeek 4%, periods: 5.5%, 5%, 4%, 3.5%, 3%)
    'account-declined-2': {
        thisWeek: { dropOff: 4, users: 100 },
        average: { dropOff: 4.3, users: 68 },
        periods: [
            { dropOff: 5.5, users: 72 },
            { dropOff: 5, users: 73 },
            { dropOff: 4, users: 63 },
            { dropOff: 3.5, users: 62 },
            { dropOff: 3, users: 58 }
        ]
    },
    // Step 4: verification-approved (dropOff: thisWeek 38%, periods: 42%, 40%, 39%, 37%, 35%)
    // Sub-step: sumsub-finished (dropOff: thisWeek 8%, periods: 9%, 8.5%, 8%, 7.5%, 7%)
    'sumsub-finished': {
        thisWeek: { dropOff: 8, users: 144 },
        average: { dropOff: 8, users: 77 },
        periods: [
            { dropOff: 9, users: 69 },
            { dropOff: 8.5, users: 74 },
            { dropOff: 8, users: 77 },
            { dropOff: 7.5, users: 83 },
            { dropOff: 7, users: 88 }
        ]
    },
    // Sub-step: sumsub-declined-repeat (dropOff: thisWeek 10%, periods: 11%, 10.5%, 10%, 9.5%, 9%)
    'sumsub-declined-repeat': {
        thisWeek: { dropOff: 10, users: 180 },
        average: { dropOff: 10, users: 96 },
        periods: [
            { dropOff: 11, users: 84 },
            { dropOff: 10.5, users: 91 },
            { dropOff: 10, users: 97 },
            { dropOff: 9.5, users: 105 },
            { dropOff: 9, users: 113 }
        ]
    },
    // Sub-step: sumsub-final-decline (dropOff: thisWeek 12%, periods: 13%, 12.5%, 12%, 11.5%, 11%)
    'sumsub-final-decline': {
        thisWeek: { dropOff: 12, users: 216 },
        average: { dropOff: 12.2, users: 118 },
        periods: [
            { dropOff: 13, users: 99 },
            { dropOff: 12.5, users: 108 },
            { dropOff: 12, users: 116 },
            { dropOff: 11.5, users: 127 },
            { dropOff: 11, users: 139 }
        ]
    },
    // Sub-step: already-verified (dropOff: thisWeek 3%, periods: 4%, 3.5%, 3.5%, 3%, 3%)
    'already-verified': {
        thisWeek: { dropOff: 3, users: 54 },
        average: { dropOff: 3.3, users: 32 },
        periods: [
            { dropOff: 4, users: 31 },
            { dropOff: 3.5, users: 30 },
            { dropOff: 3.5, users: 34 },
            { dropOff: 3, users: 33 },
            { dropOff: 3, users: 38 }
        ]
    },
    // Sub-step: account-declined-3 (dropOff: thisWeek 5%, periods: 5%, 5%, 5.5%, 5.5%, 5%)
    'account-declined-3': {
        thisWeek: { dropOff: 5, users: 90 },
        average: { dropOff: 5.2, users: 50 },
        periods: [
            { dropOff: 5, users: 38 },
            { dropOff: 5, users: 43 },
            { dropOff: 5.5, users: 53 },
            { dropOff: 5.5, users: 61 },
            { dropOff: 5, users: 63 }
        ]
    },
    // Step 5: verification-approved-account-opened (dropOff: thisWeek 45%, periods: 60%, 55%, 50%, 45%, 35%)
    // Sub-step: pricing-plan (dropOff: thisWeek 12%, periods: 16%, 15%, 14%, 12%, 9%)
    'pricing-plan': {
        thisWeek: { dropOff: 12, users: 135 },
        average: { dropOff: 13.2, users: 66 },
        periods: [
            { dropOff: 16, users: 49 },
            { dropOff: 15, users: 59 },
            { dropOff: 14, users: 68 },
            { dropOff: 12, users: 73 },
            { dropOff: 9, users: 74 }
        ]
    },
    // Sub-step: cdd-review (dropOff: thisWeek 10%, periods: 13%, 12%, 11%, 10%, 8%)
    'cdd-review': {
        thisWeek: { dropOff: 10, users: 112 },
        average: { dropOff: 10.8, users: 54 },
        periods: [
            { dropOff: 13, users: 40 },
            { dropOff: 12, users: 47 },
            { dropOff: 11, users: 53 },
            { dropOff: 10, users: 61 },
            { dropOff: 8, users: 66 }
        ]
    },
    // Sub-step: infocert (dropOff: thisWeek 18%, periods: 25%, 23%, 20%, 18%, 15%)
    'infocert': {
        thisWeek: { dropOff: 18, users: 202 },
        average: { dropOff: 20.2, users: 101 },
        periods: [
            { dropOff: 25, users: 76 },
            { dropOff: 23, users: 90 },
            { dropOff: 20, users: 97 },
            { dropOff: 18, users: 110 },
            { dropOff: 15, users: 123 }
        ]
    },
    // Infocert drop-offs (sum to infocert sub-step: thisWeek 18%, periods: 25%, 23%, 20%, 18%, 15%)
    'esign-error': {
        thisWeek: { dropOff: 1.5, users: 17 },
        average: { dropOff: 2, users: 10 },
        periods: [
            { dropOff: 2.5, users: 8 },
            { dropOff: 2.3, users: 9 },
            { dropOff: 2, users: 10 },
            { dropOff: 1.8, users: 11 },
            { dropOff: 1.5, users: 12 }
        ]
    },
    'not-esign-beginning': {
        thisWeek: { dropOff: 2.5, users: 28 },
        average: { dropOff: 3.2, users: 16 },
        periods: [
            { dropOff: 4, users: 12 },
            { dropOff: 3.7, users: 14 },
            { dropOff: 3.2, users: 16 },
            { dropOff: 3, users: 18 },
            { dropOff: 2.5, users: 21 }
        ]
    },
    'esign-conditions-opened': {
        thisWeek: { dropOff: 1, users: 11 },
        average: { dropOff: 1.3, users: 7 },
        periods: [
            { dropOff: 1.8, users: 5 },
            { dropOff: 1.6, users: 6 },
            { dropOff: 1.4, users: 7 },
            { dropOff: 1.2, users: 7 },
            { dropOff: 1, users: 8 }
        ]
    },
    'not-esign-accept': {
        thisWeek: { dropOff: 3, users: 34 },
        average: { dropOff: 3.8, users: 19 },
        periods: [
            { dropOff: 5, users: 15 },
            { dropOff: 4.6, users: 18 },
            { dropOff: 4, users: 19 },
            { dropOff: 3.6, users: 22 },
            { dropOff: 3, users: 25 }
        ]
    },
    'esign-signing-opened': {
        thisWeek: { dropOff: 1.5, users: 17 },
        average: { dropOff: 1.9, users: 10 },
        periods: [
            { dropOff: 2.5, users: 8 },
            { dropOff: 2.3, users: 9 },
            { dropOff: 2, users: 10 },
            { dropOff: 1.8, users: 11 },
            { dropOff: 1.5, users: 12 }
        ]
    },
    'not-esign-certificate': {
        thisWeek: { dropOff: 2, users: 22 },
        average: { dropOff: 2.5, users: 13 },
        periods: [
            { dropOff: 3.5, users: 11 },
            { dropOff: 3.2, users: 13 },
            { dropOff: 2.8, users: 14 },
            { dropOff: 2.5, users: 15 },
            { dropOff: 2, users: 16 }
        ]
    },
    'not-esign-otp': {
        thisWeek: { dropOff: 2.5, users: 28 },
        average: { dropOff: 3.2, users: 16 },
        periods: [
            { dropOff: 4.5, users: 14 },
            { dropOff: 4.1, users: 16 },
            { dropOff: 3.5, users: 17 },
            { dropOff: 3.2, users: 20 },
            { dropOff: 2.5, users: 21 }
        ]
    },
    'esign-wrong-otp': {
        thisWeek: { dropOff: 2, users: 22 },
        average: { dropOff: 2.5, users: 13 },
        periods: [
            { dropOff: 3.5, users: 11 },
            { dropOff: 3.2, users: 13 },
            { dropOff: 2.8, users: 14 },
            { dropOff: 2.5, users: 15 },
            { dropOff: 2, users: 16 }
        ]
    },
    'not-esign-completed': {
        thisWeek: { dropOff: 2, users: 22 },
        average: { dropOff: 2.5, users: 13 },
        periods: [
            { dropOff: 3.5, users: 11 },
            { dropOff: 3.2, users: 13 },
            { dropOff: 2.8, users: 14 },
            { dropOff: 2.5, users: 15 },
            { dropOff: 2, users: 16 }
        ]
    },
    // Sub-step: none-final (dropOff: thisWeek 5%, periods: 6%, 5.5%, 5%, 4.5%, 3%)
    'none-final': {
        thisWeek: { dropOff: 5, users: 56 },
        average: { dropOff: 4.8, users: 24 },
        periods: [
            { dropOff: 6, users: 18 },
            { dropOff: 5.5, users: 22 },
            { dropOff: 5, users: 24 },
            { dropOff: 4.5, users: 27 },
            { dropOff: 3, users: 25 }
        ]
    }
};

// State management
const state = {
    expandedSteps: new Set(),
    filters: {
        timePeriod: 'last30days',
        country: [],
        businessType: [],
        pricingPlan: [],
        platform: [],
        os: [],
        marketingSource: [],
        marketingCampaign: [],
        legalForm: [],
        corporate: 'all',
        complex: 'all',
        reOnboarded: 'all',
        ipCountry: [],
        accountDeclined: 'all',
        multicompany: 'all'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeAdvancedFilters();
    renderTable();
    updateKPIs();
});

// Filter initialization
function initializeFilters() {
    const timePeriodSelect = document.getElementById('timePeriod');
    timePeriodSelect.addEventListener('change', (e) => {
        state.filters.timePeriod = e.target.value;
        applyFilters();
    });

    // Initialize custom multiselect filters
    const multiselectFilters = ['country', 'businessType', 'pricingPlan', 'platform', 'os', 'marketingSource', 'marketingCampaign', 'legalForm', 'ipCountry'];
    multiselectFilters.forEach(filterId => {
        initializeCustomMultiselect(filterId);
    });

    // Initialize single select filters
    const singleSelectFilters = ['corporate', 'complex', 'reOnboarded', 'accountDeclined', 'multicompany'];
    singleSelectFilters.forEach(filterId => {
        const select = document.getElementById(filterId);
        if (select) {
            select.addEventListener('change', (e) => {
                state.filters[filterId] = e.target.value;
                applyFilters();
            });
        }
    });
}

// Custom Multiselect Component
function initializeCustomMultiselect(filterId) {
    const multiselect = document.querySelector(`.custom-multiselect[data-filter-id="${filterId}"]`);
    if (!multiselect) return;

    const trigger = multiselect.querySelector('.multiselect-trigger');
    const dropdown = multiselect.querySelector('.multiselect-dropdown');
    const searchInput = multiselect.querySelector('.search-input');
    const options = multiselect.querySelectorAll('.multiselect-option');
    const checkboxes = multiselect.querySelectorAll('.option-checkbox');
    const selectedContainer = multiselect.querySelector('.multiselect-selected');

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = dropdown.classList.contains('active');
        
        // Close all other multiselects
        document.querySelectorAll('.multiselect-dropdown.active').forEach(dd => {
            if (dd !== dropdown) {
                dd.classList.remove('active');
                dd.closest('.custom-multiselect').querySelector('.multiselect-trigger').classList.remove('active');
            }
        });

        dropdown.classList.toggle('active');
        trigger.classList.toggle('active');
        
        if (!isActive && searchInput) {
            setTimeout(() => searchInput.focus(), 0);
        }
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            options.forEach(option => {
                const text = option.querySelector('span').textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    option.classList.remove('hidden');
                } else {
                    option.classList.add('hidden');
                }
            });
        });
    }

    // Handle checkbox changes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            e.stopPropagation();
            const value = checkbox.value;
            
            if (value === 'all') {
                // If "All" is checked, uncheck everything else
                if (checkbox.checked) {
                    checkboxes.forEach(cb => {
                        if (cb !== checkbox) cb.checked = false;
                    });
                    state.filters[filterId] = [];
                }
            } else {
                // Uncheck "All" if any other option is selected
                const allCheckbox = multiselect.querySelector('.option-checkbox[value="all"]');
                if (allCheckbox) allCheckbox.checked = false;
                
                // Update state
                const selected = Array.from(multiselect.querySelectorAll('.option-checkbox:checked'))
                    .map(cb => cb.value)
                    .filter(v => v !== 'all');
                state.filters[filterId] = selected;
            }
            
            updateMultiselectDisplay(multiselect, filterId);
            applyFilters();
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!multiselect.contains(e.target)) {
            dropdown.classList.remove('active');
            trigger.classList.remove('active');
            // Clear search when closing
            if (searchInput) {
                searchInput.value = '';
                // Show all options again
                options.forEach(option => {
                    option.classList.remove('hidden');
                });
            }
        }
    });

    // Prevent dropdown from closing when clicking inside
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Initialize display
    updateMultiselectDisplay(multiselect, filterId);
}

function updateMultiselectDisplay(multiselect, filterId) {
    const selectedContainer = multiselect.querySelector('.multiselect-selected');
    const allCheckbox = multiselect.querySelector('.option-checkbox[value="all"]');
    const checkboxes = multiselect.querySelectorAll('.option-checkbox:checked');
    const selectedValues = Array.from(checkboxes)
        .map(cb => cb.value)
        .filter(v => v !== 'all');
    
    // Get original placeholder text
    const originalPlaceholder = multiselect.querySelector('.placeholder')?.textContent || 'Select...';
    
    selectedContainer.innerHTML = '';
    
    // Check if "All" is selected
    if (allCheckbox && allCheckbox.checked) {
        const tag = document.createElement('span');
        tag.className = 'multiselect-tag';
        tag.innerHTML = 'All<span class="multiselect-tag-remove" data-value="all">×</span>';
        
        tag.querySelector('.multiselect-tag-remove').addEventListener('click', (e) => {
            e.stopPropagation();
            allCheckbox.checked = false;
            updateMultiselectDisplay(multiselect, filterId);
            state.filters[filterId] = [];
            applyFilters();
        });
        
        selectedContainer.appendChild(tag);
    } else if (selectedValues.length === 0) {
        const placeholder = document.createElement('span');
        placeholder.className = 'placeholder';
        placeholder.textContent = originalPlaceholder;
        selectedContainer.appendChild(placeholder);
    } else {
        selectedValues.forEach(value => {
            const checkbox = multiselect.querySelector(`.option-checkbox[value="${value}"]`);
            if (checkbox) {
                const label = checkbox.closest('.multiselect-option').querySelector('span').textContent;
                const tag = document.createElement('span');
                tag.className = 'multiselect-tag';
                tag.innerHTML = `${label}<span class="multiselect-tag-remove" data-value="${value}">×</span>`;
                
                // Remove tag on click
                tag.querySelector('.multiselect-tag-remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    checkbox.checked = false;
                    updateMultiselectDisplay(multiselect, filterId);
                    const selected = Array.from(multiselect.querySelectorAll('.option-checkbox:checked'))
                        .map(cb => cb.value)
                        .filter(v => v !== 'all');
                    state.filters[filterId] = selected;
                    applyFilters();
                });
                
                selectedContainer.appendChild(tag);
            }
        });
    }
}

function initializeAdvancedFilters() {
    const toggle = document.getElementById('advancedFiltersToggle');
    const advancedFilters = document.getElementById('advancedFilters');
    
    toggle.addEventListener('click', () => {
        advancedFilters.classList.toggle('hidden');
        toggle.textContent = advancedFilters.classList.contains('hidden') 
            ? 'Advanced Filters +' 
            : 'Advanced Filters -';
    });
}

function applyFilters() {
    // In a real application, this would filter the data
    // For now, we'll just re-render the table
    renderTable();
    updateKPIs();
}

// Table rendering
function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    onboardingData.steps.forEach(step => {
        // Main step row
        const mainRow = createMainStepRow(step);
        tbody.appendChild(mainRow);

        // Sub-step rows (if expanded)
        if (state.expandedSteps.has(step.id)) {
            step.subSteps.forEach(subStep => {
                const subRow = createSubStepRow(subStep, step.id);
                tbody.appendChild(subRow);

                // Drop-off rows (if sub-step has drop-offs)
                if (subStep.dropOffs && subStep.dropOffs.length > 0 && state.expandedSteps.has(`${step.id}-${subStep.id}`)) {
                    subStep.dropOffs.forEach(dropOff => {
                        const dropOffRow = createDropOffRow(dropOff, step.id, subStep.id);
                        tbody.appendChild(dropOffRow);
                        
                        // Children rows (if drop-off has children)
                        if (dropOff.children && dropOff.children.length > 0 && state.expandedSteps.has(`${step.id}-${subStep.id}-${dropOff.id}`)) {
                            dropOff.children.forEach(child => {
                                const childRow = createChildRow(child, step.id, subStep.id, dropOff.id);
                                tbody.appendChild(childRow);
                            });
                        }
                    });
                }
            });
        }
    });
}

function createMainStepRow(step) {
    const tr = document.createElement('tr');
    tr.className = 'main-step';
    tr.dataset.stepId = step.id;

    // Step name cell
    const stepCell = document.createElement('td');
    stepCell.className = 'step-column';
    const stepNameDiv = document.createElement('div');
    stepNameDiv.className = 'step-name';
    
    const expandIcon = document.createElement('span');
    expandIcon.className = `expand-icon ${state.expandedSteps.has(step.id) ? 'expanded' : 'collapsed'}`;
    expandIcon.addEventListener('click', () => toggleStep(step.id));
    
    stepNameDiv.appendChild(expandIcon);
    stepNameDiv.appendChild(document.createTextNode(step.name));
    stepCell.appendChild(stepNameDiv);
    tr.appendChild(stepCell);

    // This week cell
    const thisWeekCell = createMainStepCell(step.weeklyData.thisWeek, step.weeklyData.average.dropOff, true);
    tr.appendChild(thisWeekCell);

    // Average cell
    const averageCell = createMainStepCell(step.weeklyData.average, step.weeklyData.average.dropOff, false);
    tr.appendChild(averageCell);

    // Period cells
    step.weeklyData.periods.forEach(periodData => {
        const periodCell = createMainStepCell(periodData, step.weeklyData.average.dropOff, false);
        tr.appendChild(periodCell);
    });

    return tr;
}

function createMainStepCell(data, averageDropOff, isThisWeek) {
    const td = document.createElement('td');
    td.className = 'percentage-cell data-column';
    
    const metricsDiv = document.createElement('div');
    metricsDiv.className = 'step-metrics';
    
    // CR (green) - first
    const crRow = document.createElement('div');
    crRow.className = 'metric-row';
    const crValue = document.createElement('span');
    crValue.className = 'metric-value metric-cr';
    crValue.textContent = `${data.cr}%`;
    crRow.appendChild(crValue);
    metricsDiv.appendChild(crRow);
    
    // Drop-off (black or red) - second
    if (data.dropOff > 0) {
        const dropRow = document.createElement('div');
        dropRow.className = 'metric-row';
        const dropValue = document.createElement('span');
        // Red if greater than average, black otherwise
        const isGreaterThanAverage = data.dropOff > averageDropOff;
        dropValue.className = `metric-value metric-drop ${isGreaterThanAverage ? 'metric-drop-high' : 'metric-drop-normal'}`;
        dropValue.textContent = `-${data.dropOff}%`;
        dropRow.appendChild(dropValue);
        metricsDiv.appendChild(dropRow);
    }
    
    // Users (blue) - third
    const usersRow = document.createElement('div');
    usersRow.className = 'metric-row';
    const usersValue = document.createElement('span');
    usersValue.className = 'metric-value metric-users';
    usersValue.textContent = `${formatNumber(data.users)} users`;
    usersRow.appendChild(usersValue);
    metricsDiv.appendChild(usersRow);
    
    td.appendChild(metricsDiv);
    return td;
}

function createSubStepRow(subStep, parentStepId) {
    const tr = document.createElement('tr');
    tr.className = 'sub-step';
    tr.dataset.stepId = `${parentStepId}-${subStep.id}`;

    // Step name cell
    const stepCell = document.createElement('td');
    stepCell.className = 'step-column';
    const stepNameDiv = document.createElement('div');
    stepNameDiv.className = 'step-name';
    
    if (subStep.dropOffs && subStep.dropOffs.length > 0) {
        const expandIcon = document.createElement('span');
        expandIcon.className = `expand-icon ${state.expandedSteps.has(`${parentStepId}-${subStep.id}`) ? 'expanded' : 'collapsed'}`;
        expandIcon.addEventListener('click', () => toggleStep(`${parentStepId}-${subStep.id}`));
        stepNameDiv.appendChild(expandIcon);
    } else {
        const spacer = document.createElement('span');
        spacer.style.width = '20px';
        spacer.style.display = 'inline-block';
        stepNameDiv.appendChild(spacer);
    }
    
    stepNameDiv.appendChild(document.createTextNode(subStep.name));
    stepCell.appendChild(stepNameDiv);
    tr.appendChild(stepCell);

    // Get drop-off data for this sub-step
    // Check if sub-step has its own drop-off data, otherwise use default
    const dropData = dropOffData[subStep.id] || {
        thisWeek: { dropOff: 0, users: 0 },
        average: { dropOff: 0, users: 0 },
        periods: [
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 },
            { dropOff: 0, users: 0 }
        ]
    };

    // This week cell
    const thisWeekCell = createSubStepCell(dropData.thisWeek, dropData.average.dropOff);
    tr.appendChild(thisWeekCell);

    // Average cell
    const averageCell = createSubStepCell(dropData.average, dropData.average.dropOff);
    tr.appendChild(averageCell);

    // Period cells
    dropData.periods.forEach(periodData => {
        const periodCell = createSubStepCell(periodData, dropData.average.dropOff);
        tr.appendChild(periodCell);
    });

    return tr;
}

function createSubStepCell(data, averageDropOff) {
    const td = document.createElement('td');
    td.className = 'percentage-cell dropoff with-tooltip data-column';
    
    const dropOffSpan = document.createElement('span');
    // Red if greater than average, black otherwise
    const isGreaterThanAverage = data.dropOff > averageDropOff;
    if (isGreaterThanAverage) {
        dropOffSpan.className = 'dropoff-high';
    } else {
        dropOffSpan.className = 'dropoff-normal';
    }
    dropOffSpan.textContent = data.dropOff > 0 ? `${data.dropOff}%` : '0%';
    td.appendChild(dropOffSpan);
    
    if (data.users > 0) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `${formatNumber(data.users)} users`;
        td.appendChild(tooltip);
    }
    
    return td;
}

function createDropOffRow(dropOff, parentStepId, subStepId) {
    const tr = document.createElement('tr');
    tr.className = 'sub-step';
    tr.style.backgroundColor = '#fafafa';

    // Step name cell
    const stepCell = document.createElement('td');
    stepCell.className = 'step-column';
    stepCell.style.paddingLeft = '60px';
    
    const stepNameDiv = document.createElement('div');
    stepNameDiv.className = 'step-name';
    
    // Add expand icon if drop-off has children
    if (dropOff.children && dropOff.children.length > 0) {
        const expandIcon = document.createElement('span');
        const dropOffId = `${parentStepId}-${subStepId}-${dropOff.id}`;
        expandIcon.className = `expand-icon ${state.expandedSteps.has(dropOffId) ? 'expanded' : 'collapsed'}`;
        expandIcon.addEventListener('click', () => toggleStep(dropOffId));
        stepNameDiv.appendChild(expandIcon);
    } else {
        const spacer = document.createElement('span');
        spacer.style.width = '20px';
        spacer.style.display = 'inline-block';
        stepNameDiv.appendChild(spacer);
    }
    
    stepNameDiv.appendChild(document.createTextNode(dropOff.name));
    stepCell.appendChild(stepNameDiv);
    tr.appendChild(stepCell);

    // Get drop-off data
    const dropData = dropOffData[dropOff.id] || {
        thisWeek: { dropOff: 0, users: 0 },
        average: { dropOff: 0, users: 0 },
        periods: Array(5).fill({ dropOff: 0, users: 0 })
    };

    // This week cell
    const thisWeekCell = createSubStepCell(dropData.thisWeek, dropData.average.dropOff);
    tr.appendChild(thisWeekCell);

    // Average cell
    const averageCell = createSubStepCell(dropData.average, dropData.average.dropOff);
    tr.appendChild(averageCell);

    // Period cells
    dropData.periods.forEach(periodData => {
        const periodCell = createSubStepCell(periodData, dropData.average.dropOff);
        tr.appendChild(periodCell);
    });

    return tr;
}

function createChildRow(child, parentStepId, subStepId, dropOffId) {
    const tr = document.createElement('tr');
    tr.className = 'sub-step';
    tr.style.backgroundColor = '#f5f5f5';

    // Step name cell
    const stepCell = document.createElement('td');
    stepCell.className = 'step-column';
    stepCell.style.paddingLeft = '100px';
    stepCell.textContent = child.name;
    tr.appendChild(stepCell);

    // Get drop-off data for child
    const dropData = dropOffData[child.id] || {
        thisWeek: { dropOff: 0, users: 0 },
        average: { dropOff: 0, users: 0 },
        periods: Array(5).fill({ dropOff: 0, users: 0 })
    };

    // This week cell
    const thisWeekCell = createSubStepCell(dropData.thisWeek, dropData.average.dropOff);
    tr.appendChild(thisWeekCell);

    // Average cell
    const averageCell = createSubStepCell(dropData.average, dropData.average.dropOff);
    tr.appendChild(averageCell);

    // Period cells
    dropData.periods.forEach(periodData => {
        const periodCell = createSubStepCell(periodData, dropData.average.dropOff);
        tr.appendChild(periodCell);
    });

    return tr;
}

function toggleStep(stepId) {
    if (state.expandedSteps.has(stepId)) {
        state.expandedSteps.delete(stepId);
    } else {
        state.expandedSteps.add(stepId);
    }
    renderTable();
}

function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// KPI updates
function updateKPIs() {
    // KPI values are now static in HTML
    // No dynamic updates needed
}


sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'test/hrtable/test/integration/FirstJourney',
		'test/hrtable/test/integration/pages/EMPsetList',
		'test/hrtable/test/integration/pages/EMPsetObjectPage'
    ],
    function(JourneyRunner, opaJourney, EMPsetList, EMPsetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('test/hrtable') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEMPsetList: EMPsetList,
					onTheEMPsetObjectPage: EMPsetObjectPage
                }
            },
            opaJourney.run
        );
    }
);
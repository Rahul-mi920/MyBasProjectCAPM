sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'rahul/app/mockdataap/test/integration/FirstJourney',
		'rahul/app/mockdataap/test/integration/pages/DatasetList',
		'rahul/app/mockdataap/test/integration/pages/DatasetObjectPage'
    ],
    function(JourneyRunner, opaJourney, DatasetList, DatasetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('rahul/app/mockdataap') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDatasetList: DatasetList,
					onTheDatasetObjectPage: DatasetObjectPage
                }
            },
            opaJourney.run
        );
    }
);
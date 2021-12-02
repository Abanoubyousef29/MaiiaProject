Feature: Calendar Appear in Dr profile

    Calendar appear in Dr profile

    @run
    Scenario: Calendar Appear When Visit Reason is selected
        Given Open Maiia Website
        When User search with "Test QA" in the search bar
        When user select "Test QATECHNIQUE" from search list
        Then The Dr "Test QATECHNIQUE" reloaded
        When user click on reason for consultation
        Then the calender should not appear in the page befor choosing the reason
        When user select "Ablation de fils" from drop down
        Then the calender should appear in the page


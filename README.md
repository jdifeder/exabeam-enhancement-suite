# Exabeam Enhancement Suite

  

This project is a Google Chrome extension that adds additional features to Exabeam Advanced Analytics.
All transmitted data occurs between the browser and the Exabeam AA server to ensure privacy.
The extension leverages existing cookies for authentication.
The extension will automatically run once authentication is detected.

**Features:**

- **Get All Rule Triggers:**
	- Determine which rules are causing the highest risk scores
	- Determine which event field values are causing the highest risk scores
	- Simulate rule tuning by filtering field values from rules. 

- **Data Validation (BETA):**

**NOTE**: Work in progress. Any outputs by this feature should be manually verified.

**NOTE**: Query throttling is enabled, however in rare cases this feature has been known to cause of DOS effect on the AA web service. It is recommended to only query 3 days or less of data to reduce the chances of this occurring. If the AA web service does crash, close the page to prevent additional queries. The web service will automatically recover in 5-10 minutes.
	- Get sample of up to 10 events of each Event Type to determine Sources and Event Types in timelines
	- See which Sources and Event Types are present in User Sessions, but not Asset Sequences
	- If DL is present, attempt to determine parsing differences between DL and AA
	- Attempt to determine AA configuration errors

  

## How to use

  

1. Download the latest compiled release (exabeam-enhancement-suite.zip) [Here](https://github.com/jdifeder/exabeam-enhancement-suite/releases/latest).

2. Unzip the "build" folder.

3. Open "chrome://extensions/" in Google Chrome.

4. Enable "Developer Mode" in the top right corner.

5. Click "Load Unpacked" and select the unzipped "build" folder .

6. Open any Exabeam Advanced Analytics in a new Chrome tab and scroll to the bottom on the page.
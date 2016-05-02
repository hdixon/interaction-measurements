_Interaction Techniques Final Project_

_Westin Lohne, Max Harlynking, Henry Dixon, Eileen Jiang_

__Files__
[4/6 Interim Report](https://docs.google.com/document/d/1ooGU8PtBHSAEaw0pwE8ps9a6Ql0EpBSfJxlLM-Ne7VM/edit?usp=sharing)

__Structure__
The source code for each test lives in its own separate subdirectory. The index.html of each subdirectory is the test itself, and all dependancies are contained within the subdirectory. Each test includes the onboarding process which teaches the user how to use the test.

```
-- directory
   -- index.html
   -- js dependancies
   -- css dependancies
   -- image dependancies
```

In addition to the tests themselves, the `task-manager` folder contains our manager program which is integrated with the tests. This program records participant data, integrates it with data collected by a given test, and then takes care of exporting the data to a Google Doc.

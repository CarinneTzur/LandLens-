export const lots=[
{id:"pawnee",address:"118 Pawnee St",price:26500,acres:.5,parcel:"22N18 445",mls:"10820916",terrain:"Listing says level",listing:"https://www.trulia.com/home/118-pawnee-st-waleska-ga-30183-49934751"},
{id:"chickasaw",address:"177 Chickasaw Dr",price:24500,acres:.4,parcel:"22N18A 639",mls:"10820834",terrain:"Listing says level",listing:"https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/"},
{id:"corner",address:"105 Corner Oak Ct",price:24500,acres:.4,parcel:"22N18A 634",mls:"10820812",terrain:"Listing says level",listing:"https://www.trulia.com/home/105-corner-oak-ct-waleska-ga-30183-49934836"}];
export const homes=[
{address:"150 Pawnee St",price:430000,date:"2025-09-19",sqft:3024,beds:3,baths:2.5,source:"https://www.georgiamls.com/150-pawnee-street-waleska-ga-30183/10490210",near:["pawnee","chickasaw"]},
{address:"102 Eagle Heart Ct",price:555000,date:"2025-12-05",sqft:2195,beds:4,baths:2.5,near:["pawnee"]},
{address:"229 Ridgewood Dr",price:575000,date:"2026-01-09",sqft:2441,beds:4,baths:3,near:["pawnee"]},
{address:"114 Eagle Heart Ct",price:557900,date:"2026-05-08",sqft:2099,beds:3,baths:3,near:["pawnee","chickasaw"]},
{address:"126 Delaney Pine Dr",price:310000,date:"2026-07-16",sqft:1610,beds:3,baths:2,near:["pawnee","corner"]},
{address:"122 Eagle Heart Ct",price:594900,date:"2026-08-10",sqft:null,beds:4,baths:3,near:["pawnee"]},
{address:"173 Ridgewood Dr",price:445000,date:"2025-12-15",sqft:1728,beds:4,baths:3,near:["pawnee","chickasaw","corner"]},
{address:"133 Fort Gibson Ct",price:614900,date:"2026-01-07",sqft:2527,beds:4,baths:3,near:["pawnee","corner"]},
{address:"105 Pinebrook Dr",price:390000,date:"2026-03-30",sqft:2110,beds:4,baths:4,near:["pawnee","corner"]},
{address:"225 Chickasaw Dr",price:362000,date:"2026-05-22",sqft:1690,beds:3,baths:3.5,near:["chickasaw","corner"]},
{address:"226 Chickasaw Dr",price:448900,date:"2026-06-01",sqft:1721,beds:3,baths:2.5,near:["chickasaw","corner"]},
{address:"141 Corner Oak Ct",price:326500,date:"2025-12-01",sqft:1270,beds:3,baths:2,near:["corner","chickasaw"]}];
lots.push({id:"dennyridge",hoaAnnual:1000,annualTax:2185,address:"0 Denny Ridge Rd",price:25000,acres:2.26,parcel:"024D 088",mls:"10723904",terrain:"MLS lot attributes: Level",listing:"https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904",origin:"discovered",addr2:"Jasper, GA 30143 · Bent Tree",imagesNote:"Listing photos from the Georgia MLS. Parcel lines are not drawn; Pickens County GIS has not been checked for this lot yet."});

homes.push({address:"78 Blue Pine Ct, Bent Tree",price:329000,date:"2026-04-24",sqft:1790,beds:3,baths:2,source:"https://orchard.com/homes/details/78-blue-pine-ct-jasper-ga-30143",near:["dennyridge"]},{address:"103 Sunrise Ter, Bent Tree",price:445000,date:"2026-09-18",sqft:3220,beds:3,baths:3,source:"https://www.exprealty.com/jasper-ga-real-estate/bent-tree/103-sunrise-ter",near:["dennyridge"]});

export const researchLinks=[["Cherokee County GIS","https://cherokeega.com/gis/"],["County 2023 contours","https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"],["USGS National Map","https://apps.nationalmap.gov/viewer/"],["FEMA flood map","https://msc.fema.gov/"],["Lake Arrowhead fee schedule","https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"]];

export const researchLinksExtra=[["Lake Arrowhead Utility Co. (water)","https://lakearrowheadutility.com/"],["Cherokee County tax & millage","https://www.cherokeecountytax.com/property.html"],["USDA Web Soil Survey","https://websoilsurvey.nrcs.usda.gov/app/"],["USFWS Wetlands Mapper","https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"],["LA 2026 construction application","https://lakearrowheadclub.net/images/APPLICATION_FOR_CONSTRUCTION_2026.pdf"],["LA design guidelines (Phase I)","http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"]];
export const lotResearch={
 "pawnee": {
  "Identity & legal::Legal description": {
   "value": "Lake Arrowhead Subdivision Lot 445, Land District 22, Land Lot 0304, Cherokee County GA",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Plat / lot number": {
   "value": "Lot 445",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Deed book / page": {
   "value": "Deed Book 14900, Page 00557 (Cherokee County)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Owner of record": {
   "value": "SANTORINI IN GA2 LLC, Plano TX (seller entity)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Boundary coordinates": {
   "value": "Parcel centroid 34.32806, -84.59435 (WGS84)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Listing::Listing status": {
   "value": "Active (Georgia MLS)",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/118-pawnee-street-waleska-ga-30183/10820916"
  },
  "Listing::Listing agent": {
   "value": "Marc Corbet",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/118-pawnee-street-waleska-ga-30183/10820916"
  },
  "Listing::Brokerage": {
   "value": "AMC Commercial Realty, Inc., 404-429-7043",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/118-pawnee-street-waleska-ga-30183/10820916"
  },
  "Terrain & land::Land cover / vegetation": {
   "value": "Wooded, mature hardwoods",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Terrain & land::Tree clearing needed": {
   "value": "Yes; trees 6 in. caliper+ are protected and need ARB approval to remove",
   "status": "Community-published",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Zoning designation": {
   "value": "PUD (Planned Unit Development), Cherokee County",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Zoning & building::Permitted uses": {
   "value": "Single-family residential per Lake Arrowhead covenants",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback front": {
   "value": "20-30 ft by section (Design Guidelines Appendix A)",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback sides": {
   "value": "10 ft; corner lots use front setback on both streets",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback rear": {
   "value": "15-20 ft by section",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Height limit": {
   "value": "35 ft max building height",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Minimum home square footage": {
   "value": "1,500-1,700 sq ft one-story / 1,700-2,000 sq ft multi-story, by section (heated)",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Architectural review required": {
   "value": "Yes - LAYCC ARB: $750 plan review, $3,500 custom-home deposit, $0.50/heated sq ft impact fee",
   "status": "Community-published",
   "source": "https://lakearrowheadclub.net/images/APPLICATION_FOR_CONSTRUCTION_2026.pdf"
  },
  "Zoning & building::HOA building restrictions": {
   "value": "ARB-approved builders or approved owner-builders only; impervious cover capped at 6,500 sq ft",
   "status": "Community-published",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Short-term rental rules": {
   "value": "Not allowed - STRs limited to Golf Villas neighborhood only",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/news/short-term-rentals-at-lake-arrowhead-4"
  },
  "Zoning & building::Building permit eligibility": {
   "value": "Yes - Cherokee County permit after ARB plan approval",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Perc / soil test": {
   "value": "Community sewer reported available; perc test likely unnecessary - confirm with Lake Arrowhead Utility",
   "status": "Reported",
   "source": "https://lakearrowheadutility.com/"
  },
  "Zoning & building::Foundation suitability": {
   "value": "Walk-out basement or stepped foundation suits slope; slab impractical on this grade",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Utilities & access::Legal road access": {
   "value": "Yes - platted lot fronting paved community street",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Utilities & access::Road surface": {
   "value": "Paved",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Utilities & access::Road maintenance": {
   "value": "Private - Lake Arrowhead POA (guard-gated community)",
   "status": "Reported",
   "source": "https://www.lakearrowheadga.com/faq"
  },
  "Utilities & access::Electric at property": {
   "value": "Amicalola EMC service territory (county GIS power layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/21"
  },
  "Utilities & access::Public water": {
   "value": "Lake Arrowhead Utility Company (community water), 770-345-5411; no CCWSA county mains within 0.5 mi",
   "status": "Reported",
   "source": "https://lakearrowheadutility.com/"
  },
  "Utilities & access::Public sewer": {
   "value": "Community sewer reported at lot line on same-street listing (282 Chickasaw Dr); confirm tap with utility",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Utilities & access::Septic feasibility": {
   "value": "Likely unnecessary if sewer confirmed; soils are well-drained stony loam",
   "status": "Unverified",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Utilities & access::Internet / fiber": {
   "value": "ETC IGNITE fiber building out Waleska area; Xfinity serves Waleska - confirm service at lot",
   "status": "Reported",
   "source": "https://www.etcnow.com/index.php/arpa-cherokee-county/"
  },
  "Utilities & access::Fire hydrant distance": {
   "value": "Multiple hydrants within ~1/3 mile (county hydrant layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Hydrants2026/MapServer"
  },
  "HOA, tax & costs::Published 2026 vacant-lot HOA dues": {
   "value": "$132/month per 2026 Fee Schedule ('Lot' maintenance fee)",
   "status": "Community-published",
   "source": "https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"
  },
  "HOA, tax & costs::HOA initiation / transfer fee": {
   "value": "Phase 1: $1,000 (first-time lot purchaser); Phase 2/3: $3,000 at each sale + 0.25% of price Community Foundation Fee",
   "status": "Community-published",
   "source": "https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"
  },
  "HOA, tax & costs::Historical annual property tax": {
   "value": "$30/year (2025, per MLS listing)",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/118-pawnee-street-waleska-ga-30183/10820916"
  },
  "HOA, tax & costs::Tax reassessment estimate": {
   "value": "Approx $260-$290/yr if reassessed near purchase price (40% assessment x 26.949 2026 unincorporated millage)",
   "status": "Calculated",
   "source": "https://www.cherokeecountytax.com/property.html"
  },
  "Environment & risk::FEMA flood zone": {
   "value": "Zone X - no mapped floodplain intersects parcel (county FEMA layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/12"
  },
  "Environment & risk::Floodplain overlap": {
   "value": "None mapped",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/12"
  },
  "Environment & risk::Wetlands": {
   "value": "None mapped on parcel (USFWS National Wetlands Inventory)",
   "status": "Verified",
   "source": "https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"
  },
  "Environment & risk::Stream / creek buffer": {
   "value": "No mapped stream or wetland buffer on parcel",
   "status": "Verified",
   "source": "https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"
  },
  "Environment & risk::Lake / waterfront proximity": {
   "value": "Interior lot, not waterfront; 540-acre private lake, marina and amenities via community",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/"
  },
  "Environment & risk::Landslide / slope hazard": {
   "value": "Elevated - steep slope soil units; geotechnical review advised before foundation design",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Environment & risk::Wildfire exposure": {
   "value": "Moderate - wooded lot in wildland-urban interface",
   "status": "Unverified",
   "source": ""
  },
  "Market & neighborhood::Comparable vacant lot sales": {
   "value": "133 Pawnee St (level lot) sold $25,000; 105 Douglas Fir Dr sold $20,000; 925 Lake Arrowhead Dr sold $9,500; steep 282 Chickasaw Dr asking $6,999",
   "status": "Reported",
   "source": "https://www.georgiamls.com/133-pawnee-street-waleska-ga-30183/10545435"
  },
  "Market & neighborhood::Neighborhood amenities": {
   "value": "Guard-gated; 540-acre lake, marina, golf course, pool, trails, parks",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/"
  },
  "Market & neighborhood::School district": {
   "value": "Cherokee County School District",
   "status": "Verified",
   "source": "https://www.cherokeek12.net/maps"
  },
  "Market & neighborhood::School assignments": {
   "value": "R.M. Moore Elementary / Teasley Middle / Cherokee High",
   "status": "Verified",
   "source": "https://www.cherokeek12.net/maps"
  },
  "Market & neighborhood::Nearby home price trend": {
   "value": "Active non-waterfront Lake Arrowhead lots listed $12,000-$35,000",
   "status": "Calculated",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Market & neighborhood::Potential resale constraints": {
   "value": "Steep build site, no STR income allowed, ARB design control",
   "status": "Calculated",
   "source": ""
  },
  "Terrain & land::Terrain / topography category": {
   "value": "Steep hillside - contradicts listing's 'Level' description",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Measured elevation minimum": {
   "value": "Approx 1,169 ft",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Measured elevation maximum": {
   "value": "Approx 1,219 ft",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Vertical relief": {
   "value": "Approx 50 ft across lot",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Average slope": {
   "value": "Roughly 30-40% grade (very steep)",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Maximum slope": {
   "value": "Soil survey maps part of lot in 25-60% slope unit",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Buildable area": {
   "value": "Constrained - flattest near road; walk-out basement or terraced design needed",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Soil type": {
   "value": "Dekalb (Tidings) stony fine sandy loam: DuE 15-25% and DuF 25-60% slope units",
   "status": "Verified",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Soil bearing capacity": {
   "value": "Well drained stony loam; rock possible - verify with geotech",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Erosion concerns": {
   "value": "High on 25-60% slope soil unit; erosion-control plan required for grading",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Drainage / runoff": {
   "value": "Well drained; sheet flow downhill off lot",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Retaining wall needed": {
   "value": "Likely for driveway/pad on this grade",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Driveway grade": {
   "value": "Steep approach likely - verify max grade at site",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Site grading estimate": {
   "value": "Significant cut/fill expected; budget well above level-lot norm",
   "status": "Calculated",
   "source": ""
  },
  "Market & neighborhood::Market liquidity / days to sell": {
   "value": "Level lots command premium (133 Pawnee sold $25k); steep lots trade far lower (282 Chickasaw asking $6,999)",
   "status": "Calculated",
   "source": "https://www.georgiamls.com/133-pawnee-street-waleska-ga-30183/10545435"
  }
 },
 "chickasaw": {
  "Identity & legal::Legal description": {
   "value": "Lake Arrowhead Subdivision Lot 639, Land District 22, Land Lot 0304, Cherokee County GA",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Plat / lot number": {
   "value": "Lot 639",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Deed book / page": {
   "value": "Deed Book 14900, Page 00552 (Cherokee County)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Owner of record": {
   "value": "SANTORINI IN GA2 LLC, Plano TX (seller entity)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Boundary coordinates": {
   "value": "Parcel centroid 34.32664, -84.59395 (WGS84)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Listing::Listing status": {
   "value": "Active (Zillow/MLS 10820834)",
   "status": "Listing-reported",
   "source": "https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/"
  },
  "Listing::Listing agent": {
   "value": "Marc Corbet",
   "status": "Listing-reported",
   "source": "https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/"
  },
  "Listing::Brokerage": {
   "value": "AMC Commercial Realty, Inc., 404-429-7043",
   "status": "Listing-reported",
   "source": "https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/"
  },
  "Terrain & land::Land cover / vegetation": {
   "value": "Wooded, mature hardwoods",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Terrain & land::Tree clearing needed": {
   "value": "Yes; trees 6 in. caliper+ are protected and need ARB approval to remove",
   "status": "Community-published",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Zoning designation": {
   "value": "PUD (Planned Unit Development), Cherokee County",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Zoning & building::Permitted uses": {
   "value": "Single-family residential per Lake Arrowhead covenants",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback front": {
   "value": "20-30 ft by section (Design Guidelines Appendix A)",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback sides": {
   "value": "10 ft; corner lots use front setback on both streets",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback rear": {
   "value": "15-20 ft by section",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Height limit": {
   "value": "35 ft max building height",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Minimum home square footage": {
   "value": "1,500-1,700 sq ft one-story / 1,700-2,000 sq ft multi-story, by section (heated)",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Architectural review required": {
   "value": "Yes - LAYCC ARB: $750 plan review, $3,500 custom-home deposit, $0.50/heated sq ft impact fee",
   "status": "Community-published",
   "source": "https://lakearrowheadclub.net/images/APPLICATION_FOR_CONSTRUCTION_2026.pdf"
  },
  "Zoning & building::HOA building restrictions": {
   "value": "ARB-approved builders or approved owner-builders only; impervious cover capped at 6,500 sq ft",
   "status": "Community-published",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Short-term rental rules": {
   "value": "Not allowed - STRs limited to Golf Villas neighborhood only",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/news/short-term-rentals-at-lake-arrowhead-4"
  },
  "Zoning & building::Building permit eligibility": {
   "value": "Yes - Cherokee County permit after ARB plan approval",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Perc / soil test": {
   "value": "Community sewer reported available; perc test likely unnecessary - confirm with Lake Arrowhead Utility",
   "status": "Reported",
   "source": "https://lakearrowheadutility.com/"
  },
  "Zoning & building::Foundation suitability": {
   "value": "Walk-out basement or stepped foundation suits slope; slab impractical on this grade",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Utilities & access::Legal road access": {
   "value": "Yes - platted lot fronting paved community street",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Utilities & access::Road surface": {
   "value": "Paved",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Utilities & access::Road maintenance": {
   "value": "Private - Lake Arrowhead POA (guard-gated community)",
   "status": "Reported",
   "source": "https://www.lakearrowheadga.com/faq"
  },
  "Utilities & access::Electric at property": {
   "value": "Amicalola EMC service territory (county GIS power layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/21"
  },
  "Utilities & access::Public water": {
   "value": "Lake Arrowhead Utility Company (community water), 770-345-5411; no CCWSA county mains within 0.5 mi",
   "status": "Reported",
   "source": "https://lakearrowheadutility.com/"
  },
  "Utilities & access::Public sewer": {
   "value": "Community sewer reported at lot line on same-street listing (282 Chickasaw Dr); confirm tap with utility",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Utilities & access::Septic feasibility": {
   "value": "Likely unnecessary if sewer confirmed; soils are well-drained stony loam",
   "status": "Unverified",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Utilities & access::Internet / fiber": {
   "value": "ETC IGNITE fiber building out Waleska area; Xfinity serves Waleska - confirm service at lot",
   "status": "Reported",
   "source": "https://www.etcnow.com/index.php/arpa-cherokee-county/"
  },
  "Utilities & access::Fire hydrant distance": {
   "value": "Multiple hydrants within ~1/3 mile (county hydrant layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Hydrants2026/MapServer"
  },
  "HOA, tax & costs::Published 2026 vacant-lot HOA dues": {
   "value": "$132/month per 2026 Fee Schedule ('Lot' maintenance fee)",
   "status": "Community-published",
   "source": "https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"
  },
  "HOA, tax & costs::HOA initiation / transfer fee": {
   "value": "Phase 1: $1,000 (first-time lot purchaser); Phase 2/3: $3,000 at each sale + 0.25% of price Community Foundation Fee",
   "status": "Community-published",
   "source": "https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"
  },
  "HOA, tax & costs::Historical annual property tax": {
   "value": "$30/year (2025, per MLS listing)",
   "status": "Listing-reported",
   "source": "https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/"
  },
  "HOA, tax & costs::Tax reassessment estimate": {
   "value": "Approx $260-$290/yr if reassessed near purchase price (40% assessment x 26.949 2026 unincorporated millage)",
   "status": "Calculated",
   "source": "https://www.cherokeecountytax.com/property.html"
  },
  "Environment & risk::FEMA flood zone": {
   "value": "Zone X - no mapped floodplain intersects parcel (county FEMA layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/12"
  },
  "Environment & risk::Floodplain overlap": {
   "value": "None mapped",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/12"
  },
  "Environment & risk::Wetlands": {
   "value": "None mapped on parcel (USFWS National Wetlands Inventory)",
   "status": "Verified",
   "source": "https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"
  },
  "Environment & risk::Stream / creek buffer": {
   "value": "No mapped stream or wetland buffer on parcel",
   "status": "Verified",
   "source": "https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"
  },
  "Environment & risk::Lake / waterfront proximity": {
   "value": "Interior lot, not waterfront; 540-acre private lake, marina and amenities via community",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/"
  },
  "Environment & risk::Landslide / slope hazard": {
   "value": "Elevated - steep slope soil units; geotechnical review advised before foundation design",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Environment & risk::Wildfire exposure": {
   "value": "Moderate - wooded lot in wildland-urban interface",
   "status": "Unverified",
   "source": ""
  },
  "Market & neighborhood::Comparable vacant lot sales": {
   "value": "282 Chickasaw Dr (steep, same street) asking $6,999; 105 Douglas Fir Dr sold $20,000; 925 Lake Arrowhead Dr sold $9,500; 133 Pawnee St (level) sold $25,000",
   "status": "Reported",
   "source": "https://www.georgiamls.com/133-pawnee-street-waleska-ga-30183/10545435"
  },
  "Market & neighborhood::Neighborhood amenities": {
   "value": "Guard-gated; 540-acre lake, marina, golf course, pool, trails, parks",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/"
  },
  "Market & neighborhood::School district": {
   "value": "Cherokee County School District",
   "status": "Verified",
   "source": "https://www.cherokeek12.net/maps"
  },
  "Market & neighborhood::School assignments": {
   "value": "R.M. Moore Elementary / Teasley Middle / Cherokee High",
   "status": "Verified",
   "source": "https://www.cherokeek12.net/maps"
  },
  "Market & neighborhood::Nearby home price trend": {
   "value": "Active non-waterfront Lake Arrowhead lots listed $12,000-$35,000",
   "status": "Calculated",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Market & neighborhood::Potential resale constraints": {
   "value": "Steep build site, no STR income allowed, ARB design control",
   "status": "Calculated",
   "source": ""
  },
  "Listing::Days on market": {
   "value": "109 days on Zillow as of Nov 2026",
   "status": "Listing-reported",
   "source": "https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/"
  },
  "Terrain & land::Terrain / topography category": {
   "value": "Sloping hillside - contradicts listing's 'Level' description",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Measured elevation minimum": {
   "value": "Approx 1,116 ft",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Measured elevation maximum": {
   "value": "Approx 1,159 ft",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Vertical relief": {
   "value": "Approx 43 ft across lot",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Average slope": {
   "value": "Roughly 20-25% grade (steep)",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Maximum slope": {
   "value": "Entire lot in 25-60% slope soil unit (DuF)",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Buildable area": {
   "value": "Constrained - suited to walk-out basement design (same-street ad markets this)",
   "status": "Calculated",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Terrain & land::Soil type": {
   "value": "Dekalb (Tidings) stony fine sandy loam, DuF 25-60% slopes",
   "status": "Verified",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Soil bearing capacity": {
   "value": "Well drained stony loam; rock possible - verify with geotech",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Erosion concerns": {
   "value": "High on 25-60% slope soil unit; erosion-control plan required for grading",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Drainage / runoff": {
   "value": "Well drained; sheet flow downhill off lot",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Retaining wall needed": {
   "value": "Possibly for driveway/pad",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Driveway grade": {
   "value": "Moderate-steep; approx 90 ft paved road frontage per same-street listing",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Terrain & land::Site grading estimate": {
   "value": "Moderate to significant; less severe than Corner Oak/Pawnee",
   "status": "Calculated",
   "source": ""
  },
  "Market & neighborhood::Market liquidity / days to sell": {
   "value": "Asking $24,500 while steep 282 Chickasaw asks $6,999 - wide spread on this street",
   "status": "Calculated",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  }
 },
 "corner": {
  "Identity & legal::Legal description": {
   "value": "Lake Arrowhead Subdivision Lot 634, Land District 22, Land Lot 0273, Cherokee County GA",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Plat / lot number": {
   "value": "Lot 634",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Deed book / page": {
   "value": "Deed Book 14900, Page 00557 (Cherokee County)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Owner of record": {
   "value": "SANTORINI IN GA2 LLC, Plano TX (seller entity)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Identity & legal::Boundary coordinates": {
   "value": "Parcel centroid 34.32572, -84.59518 (WGS84)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Listing::Listing status": {
   "value": "Active (Georgia MLS)",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/105-corner-oak-court-waleska-ga-30183/10820812"
  },
  "Listing::Listing agent": {
   "value": "Marc Corbet",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/105-corner-oak-court-waleska-ga-30183/10820812"
  },
  "Listing::Brokerage": {
   "value": "AMC Commercial Realty, Inc., 404-429-7043",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/105-corner-oak-court-waleska-ga-30183/10820812"
  },
  "Terrain & land::Land cover / vegetation": {
   "value": "Wooded, mature hardwoods",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Terrain & land::Tree clearing needed": {
   "value": "Yes; trees 6 in. caliper+ are protected and need ARB approval to remove",
   "status": "Community-published",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Zoning designation": {
   "value": "PUD (Planned Unit Development), Cherokee County",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Zoning & building::Permitted uses": {
   "value": "Single-family residential per Lake Arrowhead covenants",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback front": {
   "value": "20-30 ft by section (Design Guidelines Appendix A)",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback sides": {
   "value": "10 ft; corner lots use front setback on both streets",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Setback rear": {
   "value": "15-20 ft by section",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Height limit": {
   "value": "35 ft max building height",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Minimum home square footage": {
   "value": "1,500-1,700 sq ft one-story / 1,700-2,000 sq ft multi-story, by section (heated)",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Architectural review required": {
   "value": "Yes - LAYCC ARB: $750 plan review, $3,500 custom-home deposit, $0.50/heated sq ft impact fee",
   "status": "Community-published",
   "source": "https://lakearrowheadclub.net/images/APPLICATION_FOR_CONSTRUCTION_2026.pdf"
  },
  "Zoning & building::HOA building restrictions": {
   "value": "ARB-approved builders or approved owner-builders only; impervious cover capped at 6,500 sq ft",
   "status": "Community-published",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Short-term rental rules": {
   "value": "Not allowed - STRs limited to Golf Villas neighborhood only",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/news/short-term-rentals-at-lake-arrowhead-4"
  },
  "Zoning & building::Building permit eligibility": {
   "value": "Yes - Cherokee County permit after ARB plan approval",
   "status": "Reported",
   "source": "http://www.lakearrowheadclub.net/images/membership-document-forms/DevelopmentDesign-GuidelinesLAC20122018-10-10.pdf"
  },
  "Zoning & building::Perc / soil test": {
   "value": "Community sewer reported available; perc test likely unnecessary - confirm with Lake Arrowhead Utility",
   "status": "Reported",
   "source": "https://lakearrowheadutility.com/"
  },
  "Zoning & building::Foundation suitability": {
   "value": "Walk-out basement or stepped foundation suits slope; slab impractical on this grade",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Utilities & access::Legal road access": {
   "value": "Yes - platted lot fronting paved community street",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1"
  },
  "Utilities & access::Road surface": {
   "value": "Paved",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Utilities & access::Road maintenance": {
   "value": "Private - Lake Arrowhead POA (guard-gated community)",
   "status": "Reported",
   "source": "https://www.lakearrowheadga.com/faq"
  },
  "Utilities & access::Electric at property": {
   "value": "Amicalola EMC service territory (county GIS power layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/21"
  },
  "Utilities & access::Public water": {
   "value": "Lake Arrowhead Utility Company (community water), 770-345-5411; no CCWSA county mains within 0.5 mi",
   "status": "Reported",
   "source": "https://lakearrowheadutility.com/"
  },
  "Utilities & access::Public sewer": {
   "value": "Community sewer reported at lot line on same-street listing (282 Chickasaw Dr); confirm tap with utility",
   "status": "Reported",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Utilities & access::Septic feasibility": {
   "value": "Likely unnecessary if sewer confirmed; soils are well-drained stony loam",
   "status": "Unverified",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Utilities & access::Internet / fiber": {
   "value": "ETC IGNITE fiber building out Waleska area; Xfinity serves Waleska - confirm service at lot",
   "status": "Reported",
   "source": "https://www.etcnow.com/index.php/arpa-cherokee-county/"
  },
  "Utilities & access::Fire hydrant distance": {
   "value": "Multiple hydrants within ~1/3 mile (county hydrant layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Hydrants2026/MapServer"
  },
  "HOA, tax & costs::Published 2026 vacant-lot HOA dues": {
   "value": "$132/month per 2026 Fee Schedule ('Lot' maintenance fee)",
   "status": "Community-published",
   "source": "https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"
  },
  "HOA, tax & costs::HOA initiation / transfer fee": {
   "value": "Phase 1: $1,000 (first-time lot purchaser); Phase 2/3: $3,000 at each sale + 0.25% of price Community Foundation Fee",
   "status": "Community-published",
   "source": "https://www.lakearrowheadclub.net/images/7-LAH_2026_Fee_Schedule.pdf"
  },
  "HOA, tax & costs::Historical annual property tax": {
   "value": "$30/year (2025, per MLS listing)",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/105-corner-oak-court-waleska-ga-30183/10820812"
  },
  "HOA, tax & costs::Tax reassessment estimate": {
   "value": "Approx $260-$290/yr if reassessed near purchase price (40% assessment x 26.949 2026 unincorporated millage)",
   "status": "Calculated",
   "source": "https://www.cherokeecountytax.com/property.html"
  },
  "Environment & risk::FEMA flood zone": {
   "value": "Zone X - no mapped floodplain intersects parcel (county FEMA layer)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/12"
  },
  "Environment & risk::Floodplain overlap": {
   "value": "None mapped",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/12"
  },
  "Environment & risk::Wetlands": {
   "value": "None mapped on parcel (USFWS National Wetlands Inventory)",
   "status": "Verified",
   "source": "https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"
  },
  "Environment & risk::Stream / creek buffer": {
   "value": "No mapped stream or wetland buffer on parcel",
   "status": "Verified",
   "source": "https://www.fws.gov/program/national-wetlands-maps/wetlands-mapper"
  },
  "Environment & risk::Lake / waterfront proximity": {
   "value": "Interior lot, not waterfront; 540-acre private lake, marina and amenities via community",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/"
  },
  "Environment & risk::Landslide / slope hazard": {
   "value": "Elevated - steep slope soil units; geotechnical review advised before foundation design",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Environment & risk::Wildfire exposure": {
   "value": "Moderate - wooded lot in wildland-urban interface",
   "status": "Unverified",
   "source": ""
  },
  "Market & neighborhood::Comparable vacant lot sales": {
   "value": "105 Douglas Fir Dr sold $20,000; 925 Lake Arrowhead Dr sold $9,500; 133 Pawnee St (level) sold $25,000; steep 282 Chickasaw Dr asking $6,999",
   "status": "Reported",
   "source": "https://www.georgiamls.com/133-pawnee-street-waleska-ga-30183/10545435"
  },
  "Market & neighborhood::Neighborhood amenities": {
   "value": "Guard-gated; 540-acre lake, marina, golf course, pool, trails, parks",
   "status": "Community-published",
   "source": "https://www.lakearrowheadga.com/"
  },
  "Market & neighborhood::School district": {
   "value": "Cherokee County School District",
   "status": "Verified",
   "source": "https://www.cherokeek12.net/maps"
  },
  "Market & neighborhood::School assignments": {
   "value": "R.M. Moore Elementary / Teasley Middle / Cherokee High",
   "status": "Verified",
   "source": "https://www.cherokeek12.net/maps"
  },
  "Market & neighborhood::Nearby home price trend": {
   "value": "Active non-waterfront Lake Arrowhead lots listed $12,000-$35,000",
   "status": "Calculated",
   "source": "https://www.landwatch.com/cherokee-county-georgia-homesite-for-sale/pid/422449371"
  },
  "Market & neighborhood::Potential resale constraints": {
   "value": "Steep build site, no STR income allowed, ARB design control",
   "status": "Calculated",
   "source": ""
  },
  "Terrain & land::Terrain / topography category": {
   "value": "Very steep hillside - contradicts listing's 'Level' description",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Measured elevation minimum": {
   "value": "Approx 1,117 ft",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Measured elevation maximum": {
   "value": "Approx 1,187 ft",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Vertical relief": {
   "value": "Approx 70 ft across lot - steepest of the three",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Average slope": {
   "value": "Roughly 40-45% grade (very steep)",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Maximum slope": {
   "value": "Soil survey maps part of lot in 25-60% slope unit",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Buildable area": {
   "value": "Most constrained of the three - heavy sitework; walk-out/terraced design only",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Soil type": {
   "value": "Dekalb (Tidings) stony fine sandy loam: DuE 15-25% and DuF 25-60% slope units",
   "status": "Verified",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Soil bearing capacity": {
   "value": "Well drained stony loam; rock possible - verify with geotech",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Erosion concerns": {
   "value": "Highest of the three lots; 70 ft relief with 25-60% slope soil unit",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Drainage / runoff": {
   "value": "Well drained; strong downhill sheet flow",
   "status": "Reported",
   "source": "https://websoilsurvey.nrcs.usda.gov/app/"
  },
  "Terrain & land::Retaining wall needed": {
   "value": "Very likely for driveway/pad on this grade",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Driveway grade": {
   "value": "Steep approach likely - verify max grade at site",
   "status": "Calculated",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"
  },
  "Terrain & land::Site grading estimate": {
   "value": "Most expensive sitework of the three",
   "status": "Calculated",
   "source": ""
  },
  "Market & neighborhood::Market liquidity / days to sell": {
   "value": "Steepest of her three lots; compare 133 Pawnee (level) sold $25,000 vs steep 282 Chickasaw asking $6,999",
   "status": "Calculated",
   "source": "https://www.georgiamls.com/133-pawnee-street-waleska-ga-30183/10545435"
  }
 }
};
lotResearch["dennyridge"]={
 "Listing::Listing status": {
  "value": "Active",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Listing::Listing agent": {
  "value": "Cassidy Hulsey",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Listing::Brokerage": {
  "value": "BHHS Georgia Properties",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Identity & legal::Street address": {
  "value": "0 Denny Ridge Road, Jasper, GA 30143",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Identity & legal::County": {
  "value": "Pickens County, Georgia",
  "status": "Reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Identity & legal::Parcel number": {
  "value": "024D 088 (tax ID per listing)",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Identity & legal::Subdivision": {
  "value": "Bent Tree (gated community)",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Zoning & building::Perc / soil test": {
  "value": "Soil test attached to the MLS listing; obtain and review before any offer",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Utilities & access::Public water": {
  "value": "Listing reports water: None. Other Bent Tree listings mention public water, so service to this lot needs verification.",
  "status": "Conflicting reports",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Utilities & access::Public sewer": {
  "value": "None; Bent Tree homes run on septic (nearby sale listings)",
  "status": "Reported",
  "source": "https://orchard.com/homes/details/78-blue-pine-ct-jasper-ga-30143"
 },
 "HOA, tax & costs::Published 2026 vacant-lot HOA dues": {
  "value": "Reported around $1,000/yr for vacant Bent Tree lots; a 2026 home listing showed $4,558/yr. Verify the current vacant-lot rate.",
  "status": "Reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "HOA, tax & costs::HOA initiation / transfer fee": {
  "value": "Another Bent Tree lot listing reported a $1,674 impact fee; verify for this lot",
  "status": "Reported",
  "source": "https://www.landflip.com/land/427391/64-acre-in-bent-tree-community-pickens-ga"
 },
 "HOA, tax & costs::Historical annual property tax": {
  "value": "$2,185 (2024, per listing)",
  "status": "Listing-reported",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Market & neighborhood::Neighborhood amenities": {
  "value": "Golf, Lake Tamarack, pools, tennis and pickleball, hiking trails, stables, 24/7 gated security (community-published)",
  "status": "Community-published",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 "Market & neighborhood::Comparable vacant lot sales": {
  "value": "Nearby asking prices, not closed sales: 2.27 ac Thunder Ridge at $12,999 (reseller) and 0.64 ac Bent Tree lot at $9,900",
  "status": "Reported",
  "source": "https://www.landflip.com/land/427391/64-acre-in-bent-tree-community-pickens-ga"
 }
};

export const lotResearchCustom={
 "pawnee": [
  {
   "label": "County GIS measured acreage",
   "value": "0.505 ac (matches listed 0.5 ac)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1",
   "section": "Identity & legal"
  }
 ],
 "chickasaw": [
  {
   "label": "County GIS measured acreage",
   "value": "0.402 ac (matches listed 0.4 ac)",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1",
   "section": "Identity & legal"
  },
  {
   "label": "Adjacent lot also available",
   "value": "Listing notes the lot next door may also be available",
   "status": "Listing-reported",
   "source": "https://www.zillow.com/homedetails/177-Chickasaw-Dr-Waleska-GA-30183/49934881_zpid/",
   "section": "Listing"
  }
 ],
 "corner": [
  {
   "label": "County GIS measured acreage",
   "value": "0.542 ac - larger than listed 0.4 ac; confirm by survey",
   "status": "Verified",
   "source": "https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer/1",
   "section": "Identity & legal"
  },
  {
   "label": "Adjacent lot also available",
   "value": "Listing notes 109 Corner Oak Ct next door may also be available",
   "status": "Listing-reported",
   "source": "https://www.georgiamls.com/105-corner-oak-court-waleska-ga-30183/10820812",
   "section": "Listing"
  }
 ]
};

lotResearchCustom["dennyridge"]=[
 {
  "label": "Bent Tree market context",
  "value": "Broker market report: 45 home sales over 12 months at a $469,000 median; trailing 3-month median $372,500",
  "status": "Reported",
  "source": "https://www.jeffcrowecre.com/news/jasper-bent-tree-ga-neighborhood-home-sales-october-2026",
  "section": "Market & neighborhood"
 },
 {
  "label": "Next verification steps",
  "value": "Confirm the Level claim and review the attached soil test with the listing agent (phone only: 706-564-6420), then confirm vacant-lot HOA rate, water service and septic feasibility with Bent Tree",
  "status": "Open item",
  "source": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904",
  "section": "Listing"
 }
];

export const lotImages={
 pawnee:[
  {src:"/images/lots/33-pawnee-aerial.jpg",title:"Aerial view",desc:"USGS NAIP aerial imagery with the Cherokee County parcel boundary highlighted. The lot is heavily wooded.",source:"USGS National Map + Cherokee County GIS",url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer"},
  {src:"/images/lots/32-pawnee-contours.jpg",title:"Topography - 2 ft contours",desc:"Cherokee County 2023 two-foot contour survey over dimmed aerial imagery. Labels are elevations in feet; about 50 ft of relief crosses this lot despite the listing calling it level.",source:"Cherokee County GIS 2023 contours + USGS imagery",url:"https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"},
  {src:"/images/lots/34-pawnee-context.jpg",title:"Parcel map",desc:"Cherokee County parcel map with lot 22N18 445 highlighted, showing street names and neighboring lot lines in Lake Arrowhead.",source:"Cherokee County GIS parcel map",url:"https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer"}
 ],
 chickasaw:[
  {src:"/images/lots/38-chickasaw-aerial.jpg",title:"Aerial view",desc:"USGS NAIP aerial imagery with the Cherokee County parcel boundary highlighted. The lot is heavily wooded.",source:"USGS National Map + Cherokee County GIS",url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer"},
  {src:"/images/lots/36-chickasaw-contours.jpg",title:"Topography - 2 ft contours",desc:"Cherokee County 2023 two-foot contour survey over dimmed aerial imagery. Labels are elevations in feet; about 43 ft of relief crosses this lot despite the listing calling it level.",source:"Cherokee County GIS 2023 contours + USGS imagery",url:"https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"},
  {src:"/images/lots/40-chickasaw-context.jpg",title:"Parcel map",desc:"Cherokee County parcel map with lot 22N18A 639 highlighted, showing street names and neighboring lot lines in Lake Arrowhead.",source:"Cherokee County GIS parcel map",url:"https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer"}
 ],
 corner:[
  {src:"/images/lots/42-corner-aerial.jpg",title:"Aerial view",desc:"USGS NAIP aerial imagery with the Cherokee County parcel boundary highlighted. The lot is heavily wooded.",source:"USGS National Map + Cherokee County GIS",url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer"},
  {src:"/images/lots/44-corner-contours.jpg",title:"Topography - 2 ft contours",desc:"Cherokee County 2023 two-foot contour survey over dimmed aerial imagery. Labels are elevations in feet; about 70 ft of relief crosses this lot, the steepest of the three, despite the listing calling it level.",source:"Cherokee County GIS 2023 contours + USGS imagery",url:"https://gis.cherokeecountyga.gov/arcgis/rest/services/Contours_Intermediate_2023/MapServer"},
  {src:"/images/lots/45-corner-context.jpg",title:"Parcel map",desc:"Cherokee County parcel map with lot 22N18A 634 highlighted, showing street names and neighboring lot lines in Lake Arrowhead.",source:"Cherokee County GIS parcel map",url:"https://gis.cherokeecountyga.gov/arcgis/rest/services/MainLayers/MapServer"}
 ]
};

lotImages["dennyridge"]=[
 {
  "src": "https://gamls-assets.cdn-connectmls.com/pics/57343F3F6480295AE0630401000A8ECA/HD_107239041915763789784962741.JPEG",
  "title": "Listing photo 1",
  "desc": "From the Georgia MLS listing for 0 Denny Ridge Rd.",
  "source": "Georgia MLS",
  "url": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 {
  "src": "https://gamls-assets.cdn-connectmls.com/pics/57343F3F6480295AE0630401000A8ECA/HD_107239047009143038326343257.JPEG",
  "title": "Listing photo 2",
  "desc": "From the Georgia MLS listing for 0 Denny Ridge Rd.",
  "source": "Georgia MLS",
  "url": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 {
  "src": "https://gamls-assets.cdn-connectmls.com/pics/57343F3F6480295AE0630401000A8ECA/HD_107239047101972702380539524.JPEG",
  "title": "Listing photo 3",
  "desc": "From the Georgia MLS listing for 0 Denny Ridge Rd.",
  "source": "Georgia MLS",
  "url": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 {
  "src": "https://gamls-assets.cdn-connectmls.com/pics/57343F3F6480295AE0630401000A8ECA/HD_107239047423522280628239974.JPEG",
  "title": "Listing photo 4",
  "desc": "From the Georgia MLS listing for 0 Denny Ridge Rd.",
  "source": "Georgia MLS",
  "url": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 {
  "src": "https://gamls-assets.cdn-connectmls.com/pics/57343F3F6480295AE0630401000A8ECA/HD_107239046566219382298287052.JPEG",
  "title": "Listing photo 5",
  "desc": "From the Georgia MLS listing for 0 Denny Ridge Rd.",
  "source": "Georgia MLS",
  "url": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 },
 {
  "src": "https://gamls-assets.cdn-connectmls.com/pics/57343F3F6480295AE0630401000A8ECA/HD_10723904392326394315791189.JPEG",
  "title": "Listing photo 6",
  "desc": "From the Georgia MLS listing for 0 Denny Ridge Rd.",
  "source": "Georgia MLS",
  "url": "https://www.georgiamls.com/0-denny-ridge-road-jasper-ga-30143/10723904"
 }
];

lots.push({"id": "valleyview", "address": "0 Valley View Vista", "price": 15000, "acres": 1.25, "parcel": "027D 036", "mls": "10723918", "terrain": "MLS lot attributes: Level (not independently measured)", "listing": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918", "origin": "discovered", "addr2": "Jasper, GA 30143 \u00b7 Bent Tree", "hoaAnnual": 1000, "annualTax": 2183, "imagesNote": "Georgia MLS listing photos. These are not a survey or independent terrain measurements."});
lotResearch.valleyview={"Listing::Listing status": {"value": "Active, checked Nov 23, 2026", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Listing::Listing agent": {"value": "Cassidy Hulsey, 706-564-6420", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Listing::Brokerage": {"value": "BHHS Georgia Properties", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Identity & legal::Street address": {"value": "0 Valley View Vista, Jasper, GA 30143", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Identity & legal::County": {"value": "Pickens County, Georgia", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Identity & legal::Subdivision": {"value": "Bent Tree", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Identity & legal::Parcel number": {"value": "027D 036 (MLS tax ID)", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "HOA, tax & costs::Published 2026 vacant-lot HOA dues": {"value": "$1,000 annually per MLS; confirm current dues and assessments", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "HOA, tax & costs::Historical annual property tax": {"value": "$2,183 (2024); verify against the tax parcel and current bill", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Utilities & access::Public water": {"value": "MLS reports None; connection availability and costs not verified", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Market & neighborhood::School assignments": {"value": "Harmony ES, Jasper MS, Pickens HS per MLS; verify district assignments", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "Market & neighborhood::Neighborhood amenities": {"value": "MLS lists clubhouse, fitness center, gated entry, golf, lake, marina, playground, pool and tennis", "status": "Listing-reported", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, "HOA, tax & costs::HOA initiation / transfer fee": {"value": "", "status": "Unknown", "source": ""}};
lotResearchCustom.valleyview=[{"label": "Research gaps before an offer", "section": "Listing", "value": "No survey, measured slope, usable building area, soil-test result, septic approval or utility quote verified. Historical taxes are unusually material relative to the asking price. Confirm parcel and current bill.", "status": "Unverified", "source": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}];
lotImages.valleyview=[{"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239183381888358566292582.JPEG", "title": "Listing photo 1", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239186684443871691462117.JPEG", "title": "Listing photo 2", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_10723918197375440325968634.JPEG", "title": "Listing photo 3", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239184960112200220105415.JPEG", "title": "Listing photo 4", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239187793934517731902728.JPEG", "title": "Listing photo 5", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239181446981557256439935.JPEG", "title": "Listing photo 6", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239185788940330132385516.JPEG", "title": "Listing photo 7", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}, {"src": "https://gamls-assets.cdn-connectmls.com/pics/57336F1ADE195744E063EC01000A518D/HD_107239187722649184092645510.JPEG", "title": "Listing photo 8", "desc": "MLS-supplied photo for Valley View Vista, not independent terrain evidence.", "source": "Georgia MLS", "url": "https://www.georgiamls.com/0-valley-view-vista-jasper-ga-30143/10723918"}];
homes.filter(h=>h.near.includes("dennyridge")).forEach(h=>{if(!h.near.includes("valleyview"))h.near.push("valleyview")});


// const services = require('./');
const fileService = require('./file.service');
const sortimentFilenService = require('./sortimentfilen.service');

function compareTest(callback) {
  const reduced = getReducedArticles();
  sortimentFilenService.findAndCompare(reduced, (err, result) => {
    if (err) {
      console.log('err during findAndCompare');
      return callback(err);
    }
    callback(null, result);

  });
}

function init(callback) {
  getXML((err, xml) => {
    if (err) {
      return callback(err);
    }
    getJSON((err, json) => {
      if (err) {
        console.log('err getJson');
        return callback(err);
      } else {
        saveData(json, (err, result) => {
          if (err) {
            console.log('err saving file');
            return callback(err);
          }
          callback(null, result);
        });
      }
    });
  })
}

function saveData(json) {
  sortimentFilenService.findAndCompare(json, (err, res) => {
    if (err) {
      console.log('err saving db', err);
    } else {
      console.log('save db response', res);
    }
  });
}

function getXML(callback) {
  fileService.getXML((err, file) => {
    if (err) {
      return callback(err);
    }
    callback(null, file);
  });
}

function getJSON(callback) {
  fileService.getJSONFromXML('sortimentfilen.xml', ((err, dbEntry) => {
    if (err) {
      return callback(err);
      console.log('err during xml -> json', err);
    } else {
      callback(null, dbEntry);
      console.log('res from xml -> json ', dbEntry.count, 'articles', dbEntry.date);
    }
  }));
}

function renameFile() {
  fileService.renameFile((err, file) => {
    console.log('err', err);
    console.log('file', file);
  });
}

function getReducedArticles() {
  return {
    date: '2018-05-28',
    count: 18486,
    articles: [
      {
        nr: '101', Artikelid: '1', Varnummer: '1', Namn: 'Renat', Namn2: '', Prisinklmoms: '201.00', Volymiml: '700.00', PrisPerLiter: '291.43', Saljstart: '1993-10-01', 'Utgått': '0', Varugrupp: 'Okryddad sprit', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: '', Ursprunglandnamn: 'Sverige', Producent: 'Pernod Ricard', Leverantor: 'Pernod Ricard Sweden AB', Argang: '', Provadargang: '', Alkoholhalt: '37.50%', Sortiment: 'FS', SortimentText: 'Ordinarie sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Säd.'
      },
      {
        nr: '7548901', Artikelid: '1000008', Varnummer: '75489', Namn: 'Valtellina Superiore', Namn2: 'Sassella Riserva', Prisinklmoms: '339.00', Volymiml: '750.00', PrisPerLiter: '452.00', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Rött vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Lombardiet', Ursprunglandnamn: 'Italien', Producent: 'Arpepe', Leverantor: 'Vinoliv Import AB', Argang: '2011', Provadargang: '', Alkoholhalt: '13.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '7774701', Artikelid: '1000080', Varnummer: '77747', Namn: 'Canella', Namn2: 'Valdobbiadene Prosecco Superiore Extra Dry', Prisinklmoms: '147.00', Volymiml: '750.00', PrisPerLiter: '196.00', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Mousserande vin', Typ: 'Vitt Torrt', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Venetien', Ursprunglandnamn: 'Italien', Producent: 'Canella SpA', Leverantor: 'Fine Brands Sweden AB', Argang: '2014', Provadargang: '', Alkoholhalt: '11.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '7563901', Artikelid: '1000083', Varnummer: '75639', Namn: 'Viña Soledad', Namn2: 'Tête de Cuvée Reserva', Prisinklmoms: '159.00', Volymiml: '750.00', PrisPerLiter: '212.00', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Vitt vin', Typ: 'Fylligt &amp; Smakrikt', Stil: '', Forpackning: 'Flaska', Forslutning: 'Natur', Ursprung: 'Rioja', Ursprunglandnamn: 'Spanien', Producent: 'Bodegas Franco-Españolas', Leverantor: 'Terrific Wines AB', Argang: '2006', Provadargang: '', Alkoholhalt: '12.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Viura.'
      },
      {
        nr: '7521801', Artikelid: '1000131', Varnummer: '75218', Namn: 'Purcari', Namn2: 'Freedom Blend', Prisinklmoms: '181.00', Volymiml: '750.00', PrisPerLiter: '241.33', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Rött vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: '', Ursprunglandnamn: 'Moldavien', Producent: 'Purcari', Leverantor: 'High Coast Wine AB', Argang: '2014', Provadargang: '', Alkoholhalt: '13.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8936603', Artikelid: '1000155', Varnummer: '89366', Namn: 'Midas Golden Pilsner', Namn2: '', Prisinklmoms: '26.70', Volymiml: '330.00', PrisPerLiter: '80.91', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ljus lager', Stil: 'Modern stil', Forpackning: 'Flaska', Forslutning: '', Ursprung: '', Ursprunglandnamn: 'Sverige', Producent: 'Imperiebryggeriet AB', Leverantor: 'Imperiebryggeriet AB', Argang: '', Provadargang: '', Alkoholhalt: '4.90%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '7459301', Artikelid: '1000296', Varnummer: '74593', Namn: 'Johanneshof Reinisch', Namn2: 'Riesling', Prisinklmoms: '134.00', Volymiml: '750.00', PrisPerLiter: '178.67', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Vitt vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Niederösterreich', Ursprunglandnamn: 'Österrike', Producent: 'Johann und Veronika Reinisch', Leverantor: 'KA Import', Argang: '2014', Provadargang: '', Alkoholhalt: '12.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '1', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8780501', Artikelid: '1000369', Varnummer: '87805', Namn: 'Josés', Namn2: 'Tequila Blanco', Prisinklmoms: '272.00', Volymiml: '700.00', PrisPerLiter: '531.43', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Tequila och Mezcal', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: '', Ursprunglandnamn: 'Mexiko', Producent: 'Tierra de Agaves', Leverantor: 'Fine Brands Sweden AB', Argang: '', Provadargang: '', Alkoholhalt: '40.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8587801', Artikelid: '1000372', Varnummer: '85878', Namn: 'Fighting Cock', Namn2: 'Kentucky Straight Bourbon', Prisinklmoms: '574.00', Volymiml: '1000.00', PrisPerLiter: '574.00', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Whisky', Typ: 'Övrig', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Kentucky', Ursprunglandnamn: 'USA', Producent: 'Heaven Hill Distilleries', Leverantor: 'Fine Brands Sweden AB', Argang: '', Provadargang: '', Alkoholhalt: '51.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8797501', Artikelid: '1000416', Varnummer: '87975', Namn: 'Cognac Leyrat', Namn2: 'Fine VS', Prisinklmoms: '431.00', Volymiml: '700.00', PrisPerLiter: '615.71', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Cognac', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Cognac', Ursprunglandnamn: 'Frankrike', Producent: 'Domaine de chez maillard', Leverantor: 'Fine Brands Sweden AB', Argang: '', Provadargang: '', Alkoholhalt: '40.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8983803', Artikelid: '1000432', Varnummer: '89838', Namn: 'Schlappeseppel Specialität', Namn2: '', Prisinklmoms: '27.10', Volymiml: '330.00', PrisPerLiter: '82.12', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Mellanmörk lager', Stil: 'Märzen och wienerstil', Forpackning: 'Flaska', Forslutning: 'Bygelkork', Ursprung: '', Ursprunglandnamn: 'Tyskland', Producent: 'Schlappeseppel GmbH', Leverantor: 'Dryckesboden Sverige AB', Argang: '', Provadargang: '', Alkoholhalt: '5.60%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8996703', Artikelid: '1000435', Varnummer: '89967', Namn: 'Schlappeseppel', Namn2: 'Dunkel', Prisinklmoms: '21.10', Volymiml: '330.00', PrisPerLiter: '63.94', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Mörk lager', Stil: 'Dunkel', Forpackning: 'Flaska', Forslutning: 'Kapsyl', Ursprung: '', Ursprunglandnamn: 'Tyskland', Producent: 'Schlappeseppel GmbH', Leverantor: 'Dryckesboden Sverige AB', Argang: '', Provadargang: '', Alkoholhalt: '5.20%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8998601', Artikelid: '1000438', Varnummer: '89986', Namn: 'Schlappeseppel', Namn2: 'Hefe Weissbier', Prisinklmoms: '25.20', Volymiml: '500.00', PrisPerLiter: '50.40', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Veteöl', Stil: 'Hefeweizen', Forpackning: 'Flaska', Forslutning: 'Kapsyl', Ursprung: '', Ursprunglandnamn: 'Tyskland', Producent: 'Schlappeseppel GmbH', Leverantor: 'Dryckesboden Sverige AB', Argang: '', Provadargang: '', Alkoholhalt: '5.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8993603', Artikelid: '1000441', Varnummer: '89936', Namn: 'Schlappeseppel', Namn2: 'Pils', Prisinklmoms: '20.10', Volymiml: '330.00', PrisPerLiter: '60.91', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ljus lager', Stil: 'Pilsner - tysk stil', Forpackning: 'Flaska', Forslutning: 'Kapsyl', Ursprung: '', Ursprunglandnamn: 'Tyskland', Producent: 'Schlappeseppel GmbH', Leverantor: 'Dryckesboden Sverige AB', Argang: '', Provadargang: '', Alkoholhalt: '5.10%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8962103', Artikelid: '1000444', Varnummer: '89621', Namn: 'Schlappeseppel', Namn2: 'Kellerbier', Prisinklmoms: '21.10', Volymiml: '330.00', PrisPerLiter: '63.94', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ljus lager', Stil: 'Zwickel / keller- och landbier', Forpackning: 'Flaska', Forslutning: 'Kapsyl', Ursprung: '', Ursprunglandnamn: 'Tyskland', Producent: 'Schlappeseppel GmbH', Leverantor: 'Dryckesboden Sverige AB', Argang: '', Provadargang: '', Alkoholhalt: '5.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8973001', Artikelid: '1000454', Varnummer: '89730', Namn: 'Valmiermuiza', Namn2: 'Alus', Prisinklmoms: '32.10', Volymiml: '500.00', PrisPerLiter: '64.20', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Mellanmörk lager', Stil: 'Märzen och wienerstil', Forpackning: 'Flaska', Forslutning: '', Ursprung: '', Ursprunglandnamn: 'Lettland', Producent: 'Valmiermuiza', Leverantor: 'CCS AB', Argang: '', Provadargang: '', Alkoholhalt: '5.20%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8914003', Artikelid: '1000827', Varnummer: '89140', Namn: 'Harviestoun Old Engine Oil', Namn2: 'Black Ale', Prisinklmoms: '25.70', Volymiml: '330.00', PrisPerLiter: '77.88', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'Old ale', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skottland', Ursprunglandnamn: 'Storbritannien', Producent: 'Harviestoun Brewery', Leverantor: 'Brewery International Sweden AB', Argang: '', Provadargang: '', Alkoholhalt: '6.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '7154001', Artikelid: '1000923', Varnummer: '71540', Namn: 'Château de Cazeneuve', Namn2: 'Le Roc des Mates', Prisinklmoms: '270.00', Volymiml: '750.00', PrisPerLiter: '360.00', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Rött vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Languedoc-Roussillon', Ursprunglandnamn: 'Frankrike', Producent: 'Château de Cazeneuve', Leverantor: 'Sybaris - Wine &amp; Spirits AB', Argang: '2011', Provadargang: '', Alkoholhalt: '14.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '1', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '7102401', Artikelid: '1000940', Varnummer: '71024', Namn: 'Château de Cazeneuve', Namn2: 'Les Calcaires', Prisinklmoms: '221.00', Volymiml: '750.00', PrisPerLiter: '294.67', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Rött vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Languedoc-Roussillon', Ursprunglandnamn: 'Frankrike', Producent: 'Château de Cazeneuve', Leverantor: 'Sybaris - Wine &amp; Spirits AB', Argang: '2013', Provadargang: '', Alkoholhalt: '13.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '1', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '7447001', Artikelid: '1001022', Varnummer: '74470', Namn: 'Excelso', Namn2: 'Reserva', Prisinklmoms: '115.00', Volymiml: '750.00', PrisPerLiter: '158.67', Saljstart: '2015-09-01', 'Utgått': '0', Varugrupp: 'Rött vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Rioja', Ursprunglandnamn: 'Spanien', Producent: 'Bodegas Franco-Españolas', Leverantor: 'Terrific Wines AB', Argang: '2009', Provadargang: '', Alkoholhalt: '14.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '3063803', Artikelid: '1001025', Varnummer: '30638', Namn: 'Kråkudden', Namn2: 'Ljus Lager', Prisinklmoms: '26.20', Volymiml: '330.00', PrisPerLiter: '79.39', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ljus lager', Stil: 'Dortmunder och helles', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Stockholms län', Ursprunglandnamn: 'Sverige', Producent: 'Roslags Näsby Bryggeri', Leverantor: 'Aktiebolaget Roslags Näsby Bryggeri', Argang: '', Provadargang: '', Alkoholhalt: '5.00%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt och humle.'
      },
      {
        nr: '3064003', Artikelid: '1001233', Varnummer: '30640', Namn: 'Halmstad Brygghus', Namn2: 'Brogatan Engelsk Bitter', Prisinklmoms: '23.90', Volymiml: '330.00', PrisPerLiter: '72.42', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'Extra special bitter', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Hallands län', Ursprunglandnamn: 'Sverige', Producent: 'Halmstad Brygghus', Leverantor: 'Halmstad Brygghus AB', Argang: '', Provadargang: '', Alkoholhalt: '5.80%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt och humle.'
      },
      {
        nr: '3064202', Artikelid: '1001341', Varnummer: '30642', Namn: 'Snälleröds Jungfruns Brännvin', Namn2: '', Prisinklmoms: '219.00', Volymiml: '500.00', PrisPerLiter: '438.00', Saljstart: '2015-12-01', 'Utgått': '0', Varugrupp: 'Kryddad sprit', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skåne län', Ursprunglandnamn: 'Sverige', Producent: 'Arcus Sweden AB', Leverantor: 'Arcus Sweden AB', Argang: '', Provadargang: '', Alkoholhalt: '38.00%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '1', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '3064403', Artikelid: '1001348', Varnummer: '30644', Namn: 'Spin Back', Namn2: 'India Pale Ale', Prisinklmoms: '28.90', Volymiml: '330.00', PrisPerLiter: '87.58', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'India pale ale (IPA)', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Västerbottens län', Ursprunglandnamn: 'Sverige', Producent: 'Beer Studio', Leverantor: 'Beer Studio AB', Argang: '', Provadargang: '', Alkoholhalt: '7.30%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Pale-, carapils- och crystalmalt samt humle av sorterna summit, cascade, citra och columbus.'
      },
      {
        nr: '3064703', Artikelid: '1001367', Varnummer: '30647', Namn: 'This Ale Is India Pale', Namn2: '', Prisinklmoms: '27.20', Volymiml: '330.00', PrisPerLiter: '82.42', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'India pale ale (IPA)', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skåne län', Ursprunglandnamn: 'Sverige', Producent: 'Skelderwikens Brygghus AB', Leverantor: 'Skelderwikens Brygghus AB', Argang: '', Provadargang: '', Alkoholhalt: '5.80%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Pale ale- och cara hellmalt samt humle av sorterna cascade, centennial och citra.'
      },
      {
        nr: '3065003', Artikelid: '1001500', Varnummer: '30650', Namn: 'Halmstad Brygghus', Namn2: 'Vallgatan Pale Ale', Prisinklmoms: '21.90', Volymiml: '330.00', PrisPerLiter: '66.36', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'Amerikansk pale ale (APA)', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Hallands län', Ursprunglandnamn: 'Sverige', Producent: 'Halmstad Brygghus', Leverantor: 'Halmstad Brygghus AB', Argang: '', Provadargang: '', Alkoholhalt: '5.50%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt och humle.'
      },
      {
        nr: '3065201', Artikelid: '1001506', Varnummer: '30652', Namn: 'Tyska Eken', Namn2: 'Weisse', Prisinklmoms: '29.90', Volymiml: '500.00', PrisPerLiter: '59.80', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Veteöl', Stil: 'Hefeweizen', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Hallands län', Ursprunglandnamn: 'Sverige', Producent: 'Tyska Eken, Eks Tyska Bryggeri', Leverantor: 'Eks Tyska Bryggeri AB', Argang: '', Provadargang: '', Alkoholhalt: '5.20%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Vete- och kornmalt samt humle.'
      },
      {
        nr: '7280801', Artikelid: '1001536', Varnummer: '72808', Namn: 'Würzburger Pfaffenberg', Namn2: 'Silvaner Trocken', Prisinklmoms: '225.00', Volymiml: '750.00', PrisPerLiter: '300.00', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Vitt vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Franken', Ursprunglandnamn: 'Tyskland', Producent: 'WG Bürgerspital', Leverantor: 'Sybaris - Wine &amp; Spirits AB', Argang: '2014', Provadargang: '', Alkoholhalt: '12.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '3065303', Artikelid: '1001539', Varnummer: '30653', Namn: 'Tyska Eken Helles', Namn2: '', Prisinklmoms: '20.90', Volymiml: '330.00', PrisPerLiter: '63.33', Saljstart: '2015-11-02', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ljus lager', Stil: 'Dortmunder och helles', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Hallands län', Ursprunglandnamn: 'Sverige', Producent: 'Tyska Eken, Eks Tyska Bryggeri', Leverantor: 'Eks Tyska Bryggeri AB', Argang: '', Provadargang: '', Alkoholhalt: '4.90%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt och humle.'
      },
      {
        nr: '7141301', Artikelid: '1001549', Varnummer: '71413', Namn: 'Würzburger', Namn2: 'Silvaner Trocken', Prisinklmoms: '185.00', Volymiml: '750.00', PrisPerLiter: '246.67', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Vitt vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Franken', Ursprunglandnamn: 'Tyskland', Producent: 'WG Bürgerspital', Leverantor: 'Sybaris - Wine &amp; Spirits AB', Argang: '2014', Provadargang: '', Alkoholhalt: '11.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '3065503', Artikelid: '1001670', Varnummer: '30655', Namn: 'Fjäderholmarnas Monkey Business', Namn2: 'American Pale Ale', Prisinklmoms: '25.90', Volymiml: '330.00', PrisPerLiter: '78.49', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'Amerikansk pale ale (APA)', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Stockholms län', Ursprunglandnamn: 'Sverige', Producent: 'Fjäderholmarnas Bryggeri', Leverantor: 'Fjäderholmarnas Bryggeri AB', Argang: '', Provadargang: '', Alkoholhalt: '5.20%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt och humle.'
      },
      {
        nr: '3065603', Artikelid: '1001687', Varnummer: '30656', Namn: 'Fjäderholmarnas Libertas IPA', Namn2: 'India Pale Ale', Prisinklmoms: '26.90', Volymiml: '330.00', PrisPerLiter: '81.52', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'India pale ale (IPA)', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Stockholms län', Ursprunglandnamn: 'Sverige', Producent: 'Fjäderholmarnas Bryggeri', Leverantor: 'Fjäderholmarnas Bryggeri AB', Argang: '', Provadargang: '', Alkoholhalt: '6.00%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt och humle.'
      },
      {
        nr: '836809', Artikelid: '1001902', Varnummer: '8368', Namn: 'Gran Barquero Pack', Namn2: '', Prisinklmoms: '199.00', Volymiml: '1125.00', PrisPerLiter: '176.89', Saljstart: '2015-12-01', 'Utgått': '0', Varugrupp: 'Montilla', Typ: '', Stil: '', Forpackning: '3 flaskor à 375 ml', Forslutning: 'Skruvkapsyl', Ursprung: 'Montilla-Moriles', Ursprunglandnamn: 'Spanien', Producent: 'Pérez Barquero', Leverantor: 'We &amp; Wine AB', Argang: '', Provadargang: '', Alkoholhalt: '17.70%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Pedro ximenez.'
      },
      {
        nr: '3066103', Artikelid: '1001978', Varnummer: '30661', Namn: 'White IPA', Namn2: '', Prisinklmoms: '27.50', Volymiml: '330.00', PrisPerLiter: '83.33', Saljstart: '2015-11-02', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'India pale ale (IPA)', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skåne län', Ursprunglandnamn: 'Sverige', Producent: 'Helsingborgs Bryggeri AB', Leverantor: 'Helsingborgs Bryggeri AB', Argang: '', Provadargang: '', Alkoholhalt: '5.50%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Korn- och vetemalt och humle.'
      },
      {
        nr: '3066503', Artikelid: '1002004', Varnummer: '30665', Namn: 'Klaura', Namn2: '', Prisinklmoms: '23.70', Volymiml: '330.00', PrisPerLiter: '71.82', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Mellanmörk lager', Stil: 'Märzen och wienerstil', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Blekinge län', Ursprunglandnamn: 'Sverige', Producent: 'Restaurang Skeppsgossen', Leverantor: 'Restaurang Skeppsgossen AB', Argang: '', Provadargang: '', Alkoholhalt: '5.10%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Karamellmalt samt humle av sorterna tomahawk och cascade.'
      },
      {
        nr: '3066603', Artikelid: '1002055', Varnummer: '30666', Namn: 'Pilimausan', Namn2: '', Prisinklmoms: '20.70', Volymiml: '330.00', PrisPerLiter: '62.73', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ljus lager', Stil: 'Pilsner - tjeckisk stil', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Blekinge län', Ursprunglandnamn: 'Sverige', Producent: 'Restaurang Skeppsgossen', Leverantor: 'Restaurang Skeppsgossen AB', Argang: '', Provadargang: '', Alkoholhalt: '4.90%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Pilsnermalt samt humle av sorterna magnum och sladek.'
      },
      {
        nr: '7358001', Artikelid: '1002131', Varnummer: '73580', Namn: 'Langhe', Namn2: 'Arneis Sá Mai', Prisinklmoms: '140.00', Volymiml: '750.00', PrisPerLiter: '186.67', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Vitt vin', Typ: '', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Piemonte', Ursprunglandnamn: 'Italien', Producent: 'Az. Agr. Abrigo Giovanni', Leverantor: 'Larkum HB', Argang: '2015', Provadargang: '', Alkoholhalt: '12.50%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '3066703', Artikelid: '1002137', Varnummer: '30667', Namn: 'South Plains', Namn2: 'Burning Witches Brew', Prisinklmoms: '21.80', Volymiml: '330.00', PrisPerLiter: '66.06', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Öl', Typ: 'Ale brittisk-amerikansk stil', Stil: 'Black IPA', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skåne län', Ursprunglandnamn: 'Sverige', Producent: 'South Plains Brewing Company', Leverantor: 'South Plains Brewing Company', Argang: '', Provadargang: '', Alkoholhalt: '7.10%', Sortiment: 'TSLS', SortimentText: 'Lokalt och småskaligt', Ekologisk: '0', Etiskt: '0', Koscher: '0', RavarorBeskrivning: 'Kornmalt samt humle av sorterna amarillo, simcoe och centennial.'
      },
      {
        nr: '8537504', Artikelid: '1002815', Varnummer: '85375', Namn: 'Tamdhu', Namn2: 'Advance Sample 8 Years', Prisinklmoms: '434.00', Volymiml: '200.00', PrisPerLiter: '2170.00', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Whisky', Typ: 'Malt', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skottland', Ursprunglandnamn: 'Storbritannien', Producent: 'Hunter Laing &amp; Company', Leverantor: 'Clydesdale AB', Argang: '2006', Provadargang: '', Alkoholhalt: '50.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8609201', Artikelid: '1002939', Varnummer: '86092', Namn: 'Glen Keith', Namn2: 'Refill Hogshead 18 Years', Prisinklmoms: '1290.00', Volymiml: '700.00', PrisPerLiter: '1842.86', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Whisky', Typ: 'Malt', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skottland', Ursprunglandnamn: 'Storbritannien', Producent: 'Hunter Laing &amp; Company', Leverantor: 'Clydesdale AB', Argang: '1997', Provadargang: '', Alkoholhalt: '50.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8491301', Artikelid: '1002978', Varnummer: '84913', Namn: 'Tormore', Namn2: 'Sherry Butt 26 Years', Prisinklmoms: '1784.00', Volymiml: '700.00', PrisPerLiter: '2548.57', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Whisky', Typ: 'Malt', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: 'Skottland', Ursprunglandnamn: 'Storbritannien', Producent: 'Edition Spirits', Leverantor: 'Clydesdale AB', Argang: '1988', Provadargang: '', Alkoholhalt: '57.10%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      },
      {
        nr: '8733002', Artikelid: '1003072', Varnummer: '87330', Namn: 'Rhum Selection', Namn2: 'Barbados', Prisinklmoms: '555.00', Volymiml: '500.00', PrisPerLiter: '1110.00', Saljstart: '2015-10-01', 'Utgått': '0', Varugrupp: 'Rom', Typ: 'Mörk', Stil: '', Forpackning: 'Flaska', Forslutning: '', Ursprung: '', Ursprunglandnamn: 'Barbados', Producent: 'Granqvist Beverage House AB', Leverantor: 'Granqvist Beverage House AB', Argang: '', Provadargang: '', Alkoholhalt: '45.00%', Sortiment: 'BS', SortimentText: 'Övrigt sortiment', Ekologisk: '0', Etiskt: '0', Koscher: '0'
      }
    ]
  }
}

module.exports = {
  compareTest,
  getXML,
  getJSON,
  init,
  renameFile
}

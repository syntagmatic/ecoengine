function ColorRamp(selector_id, map) {
  var selected_color = "YlGnBu";
  var raster = "https://ecoengine.berkeley.edu/api/rstore/pr_yr_ens-avg_amon_rcp45-2050-01-01/";

  var colormap = {
    // ColorBrewer http://colorbrewer2.org/
    'YlGnBu': ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4',
                     '#1d91c0', '#225ea8', '#253494', '#081d58'],
    'YlGn': ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679',
           '#41ab5d', '#238443', '#006837', '#004529'],
    'YlGnBu': ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4',
             '#1d91c0', '#225ea8', '#253494', '#081d58'],
    'GnBu': ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4',
           '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    'BuGn': ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4',
           '#41ae76', '#238b45', '#006d2c', '#00441b'],
    'PuBuGn': ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf',
             '#3690c0', '#02818a', '#016c59', '#014636'],
    'PuBu': ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf',
           '#3690c0', '#0570b0', '#045a8d', '#023858'],
    'BuPu': ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6',
           '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    'RdPu': ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1',
           '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    'PuRd': ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0',
           '#e7298a', '#ce1256', '#980043', '#67001f'],
    'OrRd': ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59',
           '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    'YlOrRd': ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c',
             '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    'YlOrBr': ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929',
             '#ec7014', '#cc4c02', '#993404', '#662506'],
    'Purples': ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8',
              '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    'Blues': ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6',
            '#4292c6', '#2171b5', '#08519c', '#08306b'],
    'Greens': ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476',
             '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    'Oranges': ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c',
              '#f16913', '#d94801', '#a63603', '#7f2704'],
    'Reds': ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a',
           '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    'Greys': ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696',
            '#737373', '#525252', '#252525', '#000000'],
    'PuOr': ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6',
           '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788',
           '#2d004b'],
    'BrBG': ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3',
           '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e',
           '#003c30'],
    'PRGn': ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8',
           '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837',
           '#00441b'],
    'PiYG': ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef',
           '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221',
           '#276419'],
    'RdBu': ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7',
           '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac',
           '#053061'],
    'RdGy': ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7',
           '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d',
           '#1a1a1a'],
    'RdYlBu': ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090',
             '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4',
             '#313695'],
    'Spectral': ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b',
               '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd',
               '#5e4fa2'],
    'RdYlGn': ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b',
             '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850',
             '#006837'],
    'Accent': ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0',
             '#f0027f', '#bf5b17', '#666666'],
    'Dark2': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02',
            '#a6761d', '#666666'],
    'Paired': ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c',
             '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    'Pastel1': ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc',
              '#e5d8bd', '#fddaec', '#f2f2f2'],
    'Pastel2': ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae',
              '#f1e2cc', '#cccccc'],
    'Set1': ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33',
           '#a65628', '#f781bf', '#999999'],
    'Set2': ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f',
           '#e5c494', '#b3b3b3'],
    'Set3': ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462',
           '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    // Colors from Generic Mapping Tools [GMT] http://gmt.soest.hawaii.edu/
    'abyss': ['#000000', '#141e35', '#263c6a', '#2e5085', '#3563a0', '#4897d3',
        '#5ab9e9', '#8dd2ef', '#f5ffff'],
    'bathy': ['#000000', '#1f284f', '#263c6a', '#3563a0', '#4897d3', '#66cdaa',
        '#8dd2ef', '#f5ffff'],
    'cool': ['#00ffff', '#ff00ff'],
    'copper': ['#000000', '#ff9f66', '#ffc880'],
    'cubehelix': ['#000000', '#010001', '#030103', '#040104', '#060206',
        '#080208', '#090309', '#0a040b', '#0c040d', '#0d050f', '#0e0611',
        '#0f0613', '#110715', '#120817', '#130919', '#140a1b', '#140b1d',
        '#150b1f', '#160c21', '#170d23', '#170e25', '#180f27', '#181129',
        '#19122b', '#19132d', '#19142f', '#1a1530', '#1a1632', '#1a1834',
        '#1a1936', '#1a1a38', '#1a1c39', '#1a1d3b', '#1a1f3c', '#1a203e',
        '#1a223f', '#1a2341', '#192542', '#192643', '#192845', '#192946',
        '#182b47', '#182d48', '#182e49', '#17304a', '#17324a', '#17344b',
        '#17354c', '#16374c', '#16394d', '#163a4d', '#153c4d', '#153e4e',
        '#15404e', '#15424e', '#15434e', '#15454e', '#14474e', '#14494e',
        '#144a4d', '#154c4d', '#154e4d', '#154f4c', '#15514c', '#15534b',
        '#16544b', '#16564a', '#165849', '#175949', '#175b48', '#185c47',
        '#195e46', '#1a5f45', '#1b6144', '#1b6243', '#1c6342', '#1e6542',
        '#1f6641', '#206740', '#21683f', '#236a3d', '#246b3c', '#266c3b',
        '#276d3a', '#296e3a', '#2b6f39', '#2d7038', '#2f7137', '#317236',
        '#337235', '#357334', '#377433', '#397433', '#3c7532', '#3e7631',
        '#417631', '#437730', '#467730', '#48782f', '#4b782f', '#4e782f',
        '#51792e', '#53792e', '#56792e', '#59792e', '#5c7a2e', '#5f7a2f',
        '#627a2f', '#657a2f', '#687a30', '#6b7a30', '#6e7a31', '#717a32',
        '#747a32', '#787a33', '#7b7a34', '#7e7a35', '#817a37', '#847a38',
        '#877a39', '#8a793b', '#8d793c', '#90793e', '#937940', '#967941',
        '#997943', '#9b7945', '#9e7947', '#a1794a', '#a4784c', '#a6784e',
        '#a97851', '#ab7853', '#ae7856', '#b07858', '#b2785b', '#b5785e',
        '#b77860', '#b97863', '#bb7966', '#bd7969', '#bf796c', '#c1796f',
        '#c27972', '#c47a75', '#c67a78', '#c77a7c', '#c97b7f', '#ca7b82',
        '#cb7c85', '#cc7c88', '#cd7d8c', '#ce7d8f', '#cf7e92', '#d07f95',
        '#d17f99', '#d1809c', '#d2819f', '#d382a2', '#d383a5', '#d383a9',
        '#d484ac', '#d485af', '#d487b2', '#d488b5', '#d489b8', '#d48aba',
        '#d48bbd', '#d48cc0', '#d38ec3', '#d38fc5', '#d390c8', '#d292cb',
        '#d293cd', '#d295cf', '#d196d2', '#d098d4', '#d09ad6', '#cf9bd8',
        '#cf9dda', '#ce9edc', '#cda0de', '#cda2e0', '#cca4e2', '#cba5e3',
        '#cba7e5', '#caa9e6', '#c9abe7', '#c9ace9', '#c8aeea', '#c7b0eb',
        '#c7b2ec', '#c6b4ed', '#c5b6ee', '#c5b7ef', '#c4b9ef', '#c4bbf0',
        '#c3bdf1', '#c3bff1', '#c2c1f2', '#c2c2f2', '#c2c4f2', '#c1c6f3',
        '#c1c8f3', '#c1caf3', '#c1cbf3', '#c1cdf3', '#c1cff3', '#c1d0f3',
        '#c1d2f3', '#c1d4f3', '#c1d5f3', '#c2d7f2', '#c2d8f2', '#c3daf2',
        '#c3dbf2', '#c4ddf1', '#c4def1', '#c5e0f1', '#c6e1f1', '#c7e2f0',
        '#c8e4f0', '#c8e5f0', '#cae6ef', '#cbe7ef', '#cce8ef', '#cde9ef',
        '#ceebef', '#d0ecee', '#d1edee', '#d2eeee', '#d4efee', '#d5f0ee',
        '#d7f0ee', '#d9f1ee', '#daf2ee', '#dcf3ef', '#def4ef', '#dff4ef',
        '#e1f5f0', '#e3f6f0', '#e5f7f0', '#e7f7f1', '#e8f8f2', '#eaf8f2',
        '#ecf9f3', '#eefaf4', '#f0faf5', '#f2fbf6', '#f4fbf7', '#f5fcf8',
        '#f7fcf9', '#f9fdfa', '#fbfdfc', '#fdfefd', '#ffffff'],
    'dem1': ['#336600', '#81c31f', '#ffffcc', '#f4bd45', '#66330c', '#663300',
            '#fffefd'],
    'dem2': ['#006147', '#107a2f', '#e8d77d', '#a14300', '#643219', '#6e6d6c',
            '#fffefd', '#fffefd'],
    'dem3': ['#3cb371', '#deb887', '#cd6600', '#8b4513', '#eed5b7', '#eeeee0',
            '#fffafa'],
    'dem4': ['#aeefd5', '#aff0d3', '#b0f2d0', '#b0f2ca', '#b1f2c4', '#b0f3be',
            '#b0f4ba', '#b2f6b5', '#b5f6b2', '#baf7b2', '#c0f7b2', '#c6f8b2',
            '#ccf9b2', '#d2fab1', '#d9fab2', '#e0fbb2', '#e7fcb2', '#eefcb3',
            '#f5fcb3', '#fafcb2', '#f8f9ac', '#eef4a2', '#e2f097', '#d5eb8c',
            '#c6e480', '#b8de76', '#aad86c', '#9ad362', '#8ccd59', '#7dc752',
            '#6ec24a', '#5ebc42', '#4db639', '#3eb032', '#31ab2c', '#27a52a',
            '#1ea02b', '#189a2e', '#129431', '#0e8e34', '#098938', '#07843c',
            '#0c823f', '#18823f', '#28843d', '#34883c', '#408c3b', '#4c8e3b',
            '#579238', '#639436', '#6e9634', '#789a32', '#809c30', '#89a02e',
            '#93a22b', '#9ca429', '#a6a627', '#b0aa24', '#bbad22', '#c5b01e',
            '#cfb11c', '#dab318', '#e4b414', '#eeb60e', '#f6b608', '#f8b004',
            '#f4a602', '#ee9b02', '#e89002', '#e28402', '#dc7a02', '#d86f02',
            '#d36602', '#ce5c02', '#c85402', '#c04a02', '#ba4202', '#b43a02',
            '#ae3102', '#a92a02', '#a32402', '#9d1e02', '#971702', '#921201',
            '#8d0e01', '#870800', '#820500', '#7d0400', '#7a0802', '#770d02',
            '#761002', '#751204', '#751404', '#751504', '#741604', '#741805',
            '#721a06', '#721d06', '#701f07', '#6f2108', '#6e2308', '#6e2408',
            '#6d2609', '#6c280a', '#6c280a', '#6c2a0a', '#6b2c0b', '#6a2c0c',
            '#6a2e0c', '#6b300e', '#6e3412', '#713917', '#743e1c', '#764220',
            '#794625', '#7d4a2b', '#804f32', '#835538', '#875a3f', '#8a6045',
            '#8c654c', '#906a54', '#936f5a', '#967460', '#987a68', '#9c8170',
            '#9e8778', '#a08d82', '#a3938b', '#a69a93', '#a7a09c', '#aaa7a4',
            '#acabaa', '#aeadac', '#b2b1b0', '#b5b4b3', '#b8b7b6', '#bcbbba',
            '#c0bfbe', '#c4c3c2', '#c8c7c6', '#cccbca', '#d0cfce', '#d4d3d2',
            '#d8d7d6', '#dad9d8', '#dddcdb', '#e1e0df', '#e5e4e3', '#e9e8e7',
            '#ebeae9'],
    'drywet': ['#86612a', '#eec764', '#b4ee87', '#32eeeb', '#0c78ee',
            '#2601b7', '#083371'],
    'elevation': ['#699885', '#76a992', '#83b59b', '#a5c0a7', '#d3c9b3',
            '#d4b8a4', '#d4c0b5', '#d6d1ce', '#dedddc', '#eeedec', '#f7f6f5',],
    'etopo1': ['#0a0079', '#1a0089', '#260098', '#1b03a6', '#1006b4',
            '#0509c1', '#000ecb', '#0016d2', '#001ed8', '#0027df', '#0c44e7',
            '#1a66f0', '#1375f4', '#0e85f9', '#159efc', '#1eb2ff', '#2bbaff',
            '#37c1ff', '#41c8ff', '#4fd2ff', '#5edfff', '#8ae3ff', '#bce6ff',
            '#336600', '#33cc66', '#bbe492', '#ffdcb9', '#f3ca89', '#e6b858',
            '#d9a627', '#a89a1f', '#a49019', '#a28613', '#9f7b0d', '#9c7107',
            '#996600', '#a25959', '#b27676', '#b79393', '#c2b0b0', '#cdcccb',
            '#e6e5e4', '#fffefd'],
    'gebco': ['#00f0ff', '#00f0ff', '#23ffff', '#23ffff', '#5affff', '#5affff',
            '#8cffe6', '#8cffe6', '#a5ffd7', '#a5ffd7', '#c3ffd7', '#c3ffd7',
            '#d2ffd7', '#d2ffd7', '#e6fff0', '#e6fff0', '#ebffff', '#ebffff',],
    'globe': ['#9900ff', '#9900ff', '#9900ff', '#9900ff', '#8811ff', '#8811ff',
            '#7722ff', '#7722ff', '#6633ff', '#6633ff', '#5544ff', '#5544ff',
            '#4455ff', '#4455ff', '#3366ff', '#3366ff', '#2277ff', '#2277ff',
            '#1188ff', '#1188ff', '#0099ff', '#0099ff', '#1ba4ff', '#1ba4ff',
            '#36afff', '#36afff', '#51baff', '#51baff', '#6cc5ff', '#6cc5ff',
            '#86d0ff', '#86d0ff', '#a1dbff', '#a1dbff', '#bce6ff', '#bce6ff',
            '#d7f1ff', '#d7f1ff', '#f1fcff', '#f1fcff', '#336600', '#33cc66',
            '#bbe492', '#ffdcb9', '#f3ca89', '#e6b858', '#d9a627', '#a89a1f',
            '#a49019', '#a28613', '#9f7b0d', '#9c7107', '#996600', '#a25959',
            '#b27676', '#b79393', '#c2b0b0', '#cccccc', '#e5e5e5', '#f2f2f2',
            '#ffffff', '#ffffff', '#ffffff'],
    'gray': ['#000000', '#ffffff'],
    'haxby': ['#0a0079', '#0a0079', '#280096', '#280096', '#1405af', '#1405af',
            '#000ac8', '#000ac8', '#0019d4', '#0019d4', '#0028e0', '#0028e0',
            '#1a66f0', '#1a66f0', '#0d81f8', '#0d81f8', '#19afff', '#19afff',
            '#32beff', '#32beff', '#44caff', '#44caff', '#61e1f0', '#61e1f0',
            '#6aebe1', '#6aebe1', '#7cebc8', '#7cebc8', '#8aecae', '#8aecae',
            '#acf5a8', '#acf5a8', '#cdffa2', '#cdffa2', '#dff58d', '#dff58d',
            '#f0ec79', '#f0ec79', '#f7d768', '#f7d768', '#ffbd57', '#ffbd57',
            '#ffa045', '#ffa045', '#f4754b', '#f4754b', '#ee504e', '#ee504e',
            '#ff5a5a', '#ff5a5a', '#ff7c7c', '#ff7c7c', '#ff9e9e', '#ff9e9e',
            '#f5b3ae', '#f5b3ae', '#ffc4c4', '#ffc4c4', '#ffd7d7', '#ffd7d7',
            '#ffebeb', '#ffebeb', '#fffefd', '#fffefd'],
    'hot': ['#000000', '#ff0000', '#ffff00', '#ffffff'],
    'ibcso': ['#1f284f', '#1f284f', '#263c6a', '#263c6a', '#2e5085', '#2e5085',
            '#3563a0', '#3563a0', '#3c77bc', '#3c77bc', '#4897d3', '#4897d3',
            '#5ab9e9', '#5ab9e9', '#5fc6f2', '#5fc6f2', '#72caee', '#72caee',
            '#8dd2ef', '#8dd2ef'],
    'jet': ['#00007f', '#0000ff', '#00ffff', '#ffff00', '#ff0000', '#7f0000'],
    'no_green': ['#2060ff', '#2060ff', '#209fff', '#209fff', '#20bfff',
            '#20bfff', '#00cfff', '#00cfff', '#2affff', '#2affff', '#55ffff',
            '#55ffff', '#7fffff', '#7fffff', '#aaffff', '#aaffff', '#ffff54',
            '#ffff54', '#fff000', '#fff000', '#ffbf00', '#ffbf00', '#ffa800',
            '#ffa800', '#ff8a00', '#ff8a00', '#ff7000', '#ff7000', '#ff4d00',
            '#ff4d00', '#ff0000', '#ff0000'],
    'ocean': ['#000000', '#000519', '#000a32', '#00507d', '#0096c8', '#56c5b8',
            '#acf5a8', '#d3fad3', '#faffff'],
    'paired': ['#a6cee3', '#a6cee3', '#1f78b4', '#1f78b4', '#b2df8a',
            '#b2df8a', '#33a02c', '#33a02c', '#fb9a99', '#fb9a99', '#e31a1c',
            '#e31a1c', '#fdbf6f', '#fdbf6f', '#ff7f00', '#ff7f00', '#cab2d6',
            '#cab2d6', '#6a3d9a', '#6a3d9a', '#ffff99', '#ffff99', '#b15928',
            '#b15928'],
    'panoply': ['#040ed8', '#040ed8', '#2050ff', '#2050ff', '#4196ff',
            '#4196ff', '#6dc1ff', '#6dc1ff', '#86d9ff', '#86d9ff', '#9ceeff',
            '#9ceeff', '#aff5ff', '#aff5ff', '#ceffff', '#ceffff', '#fffe47',
            '#fffe47', '#ffeb00', '#ffeb00', '#ffc400', '#ffc400', '#ff9000',
            '#ff9000', '#ff4800', '#ff4800', '#ff0000', '#ff0000', '#d50000',
            '#d50000', '#9e0000', '#9e0000'],
    'polar': ['#0000ff', '#ffffff', '#ff0000'],
    'red2green': ['#ff0000', '#ffffff', '#00ff00'],
    'relief': ['#000000', '#000519', '#000a32', '#00507d', '#0096c8',
            '#56c5b8', '#acf5a8', '#d3fad3', '#faffff', '#467832', '#786432',
            '#927e3c', '#c6b250', '#fae664', '#faea7e', '#fcee98', '#fcf3b1',
            '#fdf9d8', '#ffffff'],
    'seafloor': ['#6900b6', '#6e00bc', '#7300c1', '#7800c9', '#6d0ecc',
            '#611ccf', '#542ad2', '#4739d6', '#3a48d9', '#2c58dc', '#1e68df',
            '#0f79e2', '#008ae6', '#1996e9', '#32a2ec', '#4caeef', '#67bbf2',
            '#81c8f5', '#9dd6f9', '#bae3fc', '#d7f1ff', '#f1fcff'],
    'seis': ['#aa0000', '#ff0000', '#ff5500', '#ffaa00', '#ffff00', '#ffff00',
            '#5aff1e', '#00f06e', '#0050ff', '#0000cd'],
    'split': ['#8080ff', '#000080', '#000000', '#800000', '#ff8080'],
    'wysiwyg': ['#400040', '#400040', '#4000c0', '#4000c0', '#0040ff',
            '#0040ff', '#0080ff', '#0080ff', '#00a0ff', '#00a0ff', '#40c0ff',
            '#40c0ff', '#40e0ff', '#40e0ff', '#40ffff', '#40ffff', '#40ffc0',
            '#40ffc0', '#40ff40', '#40ff40', '#80ff40', '#80ff40', '#c0ff40',
            '#c0ff40', '#ffff40', '#ffff40', '#ffe040', '#ffe040', '#ffa040',
            '#ffa040', '#ff6040', '#ff6040', '#ff2040', '#ff2040', '#ff60c0',
            '#ff61c0', '#ffa0ff', '#ffa0ff', '#ffe0ff', '#ffe0e1']
  };

  // Add reversed colors
  for (var k in colormap) {
    colormap[k + "_r"] = colormap[k].slice().reverse();
  }

  // color picker 
  d3.select("#color-ramp")
    .on("change", function() {
      selected_color = this.value;
      updateLayer();
    })
    .selectAll("option")
    .data(d3.keys(colormap))
    .enter().append("option")
    .attr("value", String)
    .text(String);

  function updateLayer() {
    map.removeLayer(activeLayer);
    activeLayer = L.tileLayer(raster.tile_template + "?style=" + selected_color, {
        attribution: '',
        maxZoom: 15, minZoom: 2
    });
    map.addLayer(activeLayer);

    /* Legend */
    var legendheight = 200;
    var steps = colormap[selected_color].length;

    d3.select("#color-ramp-legend .title")
      .text(raster.units);

    var canvas = d3.select("#color-ramp-legend .legend")
      .append("canvas")
      .attr("height", legendheight + "px")
      .attr("width", "20px").node();
    var ctx = canvas.getContext("2d");

    var colorscale = d3.scale.linear()
      .domain(d3.range(0,legendheight,legendheight/steps).reverse())
      .range(colormap[selected_color]);

    var legendscale = d3.scale.linear()
      .range([0, legendheight])
      .domain([raster.maxval, raster.minval]);

    d3.range(legendheight).forEach(function(i) {
      ctx.fillStyle = colorscale(i);
      ctx.fillRect(0,i,20,1);
    });

    var legendaxis = d3.svg.axis()
      .scale(legendscale)
      .orient("right")
      .tickFormat(d3.format("s"))
      .tickSize(5)
      .ticks(8);

    var svg = d3.select("#color-ramp-legend .legend")
      .append("svg")
      .attr("height", (legendheight+4) + "px")
      .attr("width", "80px")
      .style("top", "-1px")
      .style("left", "-1px")

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(22, 2)")
      .call(legendaxis);
  };

  return {
    updateLayer: updateLayer,
    raster: function(d) { 
      if (!d) return raster;
      raster = d;
    }
  };
};

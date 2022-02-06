import React from "react";
import TreeMenu from 'react-simple-tree-menu';
const treeData = {
  'first-level-node-1': {               // key
    label: 'Phytophthora agathicida',
    index: 0, // decide the rendering order on the same level
       // any other props you need, e.g. url
    nodes: {
      'Phyag_NZFS3770': {
        label: 'Phyag_NZFS3770',
        index: 0, },
        'Phyag_NZFS3772':{
          label: 'Phyag_NZFS3772',
          index:0,
        }
    },
   
  },
  'first-level-node-2': {
    label: 'Phytophthora aleatoria',
    index: 1,
    nodes:{
      'Phyal_NZFS4037': {
        label: 'Phyal_NZFS4037',
        index: 2, },
  },},
  'first-level-node-3': {
    label: 'Phytophthora boehmeriae',
    index: 2,
    nodes:{
      'Phybo_SCRP23': {
        label: 'Phybo_SCRP23',
        index: 2, },
    }
  },
  'first-level-node-4': {
     label: 'Phytophthora cactorum',
     index: 3,
     nodes:{
       'Phyca_P404': {
         label: 'Phyca_P404',
       index: 3, },
       'Phyca_4032': {
        label: 'Phyca_4032',
      index: 3, },
      'Phyca_2003-3': {
        label: 'Phyca_2003-3',
      index: 3, },
      'Phyca_4040': {
        label: 'Phyca_4040',
      index: 3, },
      'Phyca_62471': {
        label: 'Phyca_62471',
      index: 3, },
      'Phyca_NZFS3830': {
        label: 'Phyca_NZFS3830',
      index: 3, },
      'Phyca_P295': {
        label: 'Phyca_P295',
      index: 3, },
      
      'Phyca_P404': {
        label: 'Phyca_P404',
      index: 3, },
      'Phyca_P415': {
        label: 'Phyca_P415',
      index: 3, },
      'Phyca_P416': {
        label: 'Phyca_P416',
      index: 3, },
      'Phyca_P421': {
        label: 'Phyca_P421',
      index: 3, },
      'Phyca_PC13-15': {
        label: 'Phyca_PC13-15',
      index: 3, },
      'Phyca_R36-14': {
        label: 'Phyca_R36-14',
      index: 3, },
     }
    },
    // 'first-level-node-5': {
    //   label: 'Phytophthora cambivora',
    //   index: 4,
    //   nodes:{}},

      'first-level-node-6': {
        label: 'Phytophthora capsici',
        index: 5,
        nodes:{
          'Phyca_CPV-219': {
            label: 'Phyca_CPV-219',
          index: 4, },
          'Phyca_CPV-270': {
            label: 'Phyca_CPV-270',
          index: 4, }, 
          'Phyca_CPV-277': {
            label: 'Phyca_CPV-277',
          index: 4, },
          'Phyca_CPV-302': {
            label: 'Phyca_CPV-302',
          index: 4, },
          'Phyca_JHAI1-7': {
            label: 'Phyca_JHAI1-7',
          index: 4, },
          'Phyca_KPC-7': {
            label: 'Phyca_KPC-7',
          index: 4, },
          'Phyca_LT1534-B': {
            label: 'Phyca_LT1534-B',
          index: 4, },
          'Phyca_MY-1': {
            label: 'Phyca_MY-1',
          index: 4, },
          
        }},
   'first-level-node-7': {
      label: 'Phytophthora chlamydospora',
       index: 6,
      nodes:{
        'Phych_P17-99': {
          label: 'Phych_P17-99',
        index: 5, },
      }},
      'first-level-node-8': {
        label: 'Phytophthora cinnamomi',
         index: 7,
        nodes:{
          'Phyci_DU054': {
            label: 'Phyci_DU054',
          index: 5, },
          'Phyci_GKB4': {
            label: 'Phyci_GKB4',
          index: 5, },
          'Phyci_MP94-48': {
            label: 'Phyci_MP94-48',
          index: 5, },
          'Phyci_NZFS3750': {
            label: 'Phyci_NZFS3750',
          index: 5, },
          'Phyci_WA94.26': {
            label: 'Phyci_WA94.26',
          index: 5, },
        }},

        'first-level-node-77': {
          label: 'Phytophthora colocasiae',
           index: 77,
          nodes:{
            'Phyco_7290': {
              label: 'Phyco_7290',
            index: 5, },
          }},    

        'first-level-node-9': {
          label: 'Phytophthora cryptogea',
           index: 8,
          nodes:{
            'Phycr_CBS418.71': {
              label: 'Phycr_CBS418.71',
            index: 5, },
          }},
          'first-level-node-10': {
            label: 'Phytophthora fragariae',
             index: 9,
            nodes:{
              'Phyfr_A4': {
                label: 'Phyfr_A4',
              index: 5, },
              'Phyfr_BC-1': {
                label: 'Phyfr_BC-1',
              index: 5, },
              'Phyfr_A4': {
                label: 'Phyfr_A4.fna',
              index: 5, },
              'Phyfr_BC-23': {
                label: 'Phyfr_BC-23',
              index: 5, },
              'Phyfr_CBS209.46': {
                label: 'Phyfr_CBS209.46',
              index: 5, },
              'Phyfr_CBS309.62': {
                label: 'Phyfr_CBS309.62',
              index: 5, },
              'Phyfr_NOV-27': {
                label: 'Phyfr_NOV-27',
              index: 5, },
              'Phyfr_NOV-5': {
                label: 'Phyfr_NOV-5',
              index: 5, },
              'Phyfr_NOV-71': {
                label: 'Phyfr_NOV-71',
              index: 5, },
              'Phyfr_NOV-77': {
                label: 'Phyfr_NOV-77',
              index: 5, },
              'Phyfr_ONT-3': {
                label: 'Phyfr_ONT-3',
              index: 5, },
              'Phyfr_SCRP245': {
                label: 'Phyfr_SCRP245',
              index: 5, },
            }},
  
// 'first-level-node-11':{
//   label: 'Phytophthora gonapodyides',
//              index: 10,
//             nodes:{

          
//             }},
'first-level-node-12':{
  label: 'Phytophthora idaei',
             index: 11,
            nodes:{
              'Phyid_SCRP370': {
                label: 'Phyid_SCRP370',
              index: 5, },
              'Phyid_SCRP371': {
                label: 'Phyid_SCRP371',
              index: 5, },
              'Phyid_SCRP376': {
                label: 'Phyid_SCRP376',
              index: 5, },
            }},
            'first-level-node-13':{
              label: 'Phytophthora infestans',
                         index: 12,
                        nodes:{
                          'Phyin_KR_2_A2': {
                            label: 'Phyin_KR_2_A2',
                          index: 5, },
                          'Phyin_T30-4': {
                            label: 'Phyin_T30-4',
                          index: 5, },
                        }},
'first-level-node-14':{
  label: 'Phytophthora kernoviae',
             index: 13,
            nodes:{
              'Phyke_CBS122049': {
                label: 'Phyke_CBS122049',
              index: 5, },
              'Phyke_Chile2': {
                label: 'Phyke_Chile2',
              index: 5, },
              'Phyke_Chile4': {
                label: 'Phyke_Chile4',
              index: 5, },
              'Phyke_Chile6': {
                label: 'Phyke_Chile6',
              index: 5, },
              'Phyke_Chile7': {
                label: 'Phyke_Chile7',
              index: 5, },
              'Phyke_NZFS2646': {
                label: 'Phyke_NZFS2646',
              index: 5, },
              'Phyke_NZFS3630': {
                label: 'Phyke_NZFS3630',
              index: 5, },
              'Phyke_00238_432': {
                label: 'Phyke_00238_432',
              index: 5, },
              'Phyke_00629_1': {
                label: 'Phyke_00629_1',
              index: 5, },
              'Phyke_00844_4': {
                label: 'Phyke_00844_4',
              index: 5, },
            }},
            'first-level-node-15':{
              label: 'Phytophthora lateralis',
                         index: 14,
                        nodes:{
                          'Phyla_CBS168.42': {
                            label: 'Phyla_CBS168.42',
                          index: 5, },
                          'Phyla_SMSTG': {
                            label: 'Phyla_SMSTG',
                          index: 5, },
                          'Phyla_MPF4': {
                            label: 'Phyla_MPF4',
                          index: 5, },
                          'Phyla_MPF6': {
                            label: 'Phyla_MPF6',
                          index: 5, },
                          'Phyla_SMST21': {
                            label: 'Phyla_SMST21',
                          index: 5, },
                        }},
            'first-level-node-16':{
              label: 'Phytophthora litchii',
                         index: 15,
                        nodes:{
                          'Phyli_SHS3': {
                            label: 'Phyli_SHS3',
                          index: 5, },
                        }},
   'first-level-node-17':{
      label: 'Phytophthora megakarya',
      index: 16,
       nodes:{
        'Phyme_zdho120': {
          label: 'Phyme_zdho120',
        index: 5, },
       }},

       'first-level-node-18':{
        label: 'Phytophthora multivora',
        index: 17,
         nodes:{
          'Phymu_NZFS3378': {
            label: 'Phymu_NZFS3378',
          index: 5, },
          'Phymu_NZFS3448': {
            label: 'Phymu_NZFS3448',
          index: 5, },
         }},
  
         'first-level-node-19':{
          label: 'Phytophthora nicotianae',
          index: 18,
           nodes:{
            'Phyni_JM01': {
              label: 'Phyni_JM01',
            index: 5, },
            'Phyni_race0': {
              label: 'Phyni_race0',
            index: 5, },
            'Phyni_race1': {
              label: 'Phyni_race1',
            index: 5, },
           }},
           'first-level-node-20':{
            label: 'Phytophthora palmivora',
            index: 19,
             nodes:{
              'Phypa_B4PPRK_Kuching_Sarawak': {
                label: 'Phypa_B4PPRK_Kuching_Sarawak',
              index: 5, },
              'Phypa_var.palmivora_sbr112.9': {
                label: 'Phypa_var.palmivora_sbr112.9',
              index: 5, },
              
             }},  
             'first-level-node-21':{
              label: 'Phytophthora parasitica',
              index: 20,
               nodes:{
                'Phypa_CHvinca01': {
                  label: 'Phypa_CHvinca01',
                index: 5, },
                'Phypa_CJ02B3': {
                  label: 'Phypa_CJ02B3',
                index: 5, },
                'Phypa_CJ05E6': {
                  label: 'Phypa_CJ05E6',
                index: 5, },
                'Phypa_IAC_01_95': {
                  label: 'Phypa_IAC_01_95',
                index: 5, },
                'Phypa_INRA-310': {
                  label: 'Phypa_INRA-310',
                index: 5, },
               }},  
               'first-level-node-22':{
                label: 'Phytophthora pinifola',
                index: 21,
                 nodes:{
                  'Phypi_CBS122922': {
                    label: 'Phypi_CBS122922',
                  index: 5, },
                 
                 }},  
                 'first-level-node-23':{
                  label: 'Phytophthora pisi',
                  index: 22,
                   nodes:{
                    'Phypi': {
                      label: 'Phypi',
                    index: 5, },
                   }},  
                   'first-level-node-24':{
                    label: 'Phytophthora plurivora',
                    index: 23,
                     nodes:{
                      'Phypl_AV1007': {
                        label: 'Phypl_AV1007',
                      index: 5, },
                     }},  
      'first-level-node-25':{
        label: 'Phytophthora pluvialis',
        index: 24,
         nodes:{
          'Phypl_LC9-1': {
            label: 'Phypl_LC9-1',
          index: 5, },
          'Phypl_NZFS3000': {
            label: 'Phypl_NZFS3000',
          index: 5, },
         }},  
'first-level-node-26':{
  label: 'Phytophthora pseudosyringae',
  index: 25,
   nodes:{
    'Phyps_PR13-731': {
      label: 'Phyps_PR13-731',
    index: 5, },
    'Phyps_SCRP734': {
      label: 'Phyps_SCRP734',
    index: 5, },
   }},  
  
  'first-level-node-27':{
    label: 'Phytophthora ramorum',
    index: 26,
     nodes:{
      'Phyra_CC1011': {
        label: 'Phyra_CC1011',
      index: 5, },
      'Phyra_CDFA1418886': {
        label: 'Phyra_CDFA1418886',
      index: 5, },
      'Phyra_EU12275': {
        label: 'Phyra_EU12275',
      index: 5, },
      'Phyra_EU1CC1008': {
        label: 'Phyra_EU1CC1008',
      index: 5, },
      'Phyra_EU1CC1033': {
        label: 'Phyra_EU1CC1033',
      index: 5, },
      'Phyra_EU1CC1048': {
        label: 'Phyra_EU1CC1048',
      index: 5, },
      'Phyra_EU1CC14654': {
        label: 'Phyra_EU1CC14654',
      index: 5, },
      'Phyra_EU1CC2168': {
        label: 'Phyra_EU1CC2168',
      index: 5, },
      'Phyra_EU1CC2176': {
        label: 'Phyra_EU1CC2176',
      index: 5, },
      'Phyra_EU1CC2184': {
        label: 'Phyra_EU1CC2184',
      index: 5, },
      'Phyra_EU1CC2186': {
        label: 'Phyra_EU1CC2186',
      index: 5, },
      'Phyra_EU1CC2187': {
        label: 'Phyra_EU1CC2187',
      index: 5, },
      'Phyra_EU2_996_3': {
        label: 'Phyra_EU2_996_3',
      index: 5, },
      'Phyra_EU2_SOD58_12': {
        label: 'Phyra_EU2_SOD58_12',
      index: 5, },
      'Phyra_EU2SOD136_11': {
        label: 'Phyra_EU2SOD136_11',
      index: 5, },
      'Phyra_EU2SOD158_11': {
        label: 'Phyra_EU2SOD158_11',
      index: 5, },
      'Phyra_EU2SOD169_11': {
        label: 'Phyra_EU2SOD169_11',
      index: 5, },
      'Phyra_EU2SOD22_12': {
        label: 'Phyra_EU2SOD22_12',
      index: 5, },
      'Phyra_EU2SOD69_12': {
        label: 'Phyra_EU2SOD69_12',
      index: 5, },
      'Phyra_EU2SODL51': {
        label: 'Phyra_EU2SODL51',
      index: 5, },
      'Phyra_Pr102': {
        label: 'Phyra_Pr102',
      index: 5, },
      'Phyra_Pr102-2018': {
        label: 'Phyra_Pr102-2018',
      index: 5, },
      

     }},
'first-level-node-28':{
  label: 'Phytophthora rubi',
  index: 27,
   nodes:{

    'Phyru_CBS109.892': {
      label: 'Phyru_CBS109.892',
    index: 5, },

    'Phyru_pd0101050015038': {
      label: 'Phyru_pd0101050015038',
    index: 5, },

    'Phyru_SCRP249': {
      label: 'Phyru_SCRP249',
    index: 5, },

    'Phyru_SCRP324': {
      label: 'Phyru_SCRP324',
    index: 5, },

    'Phyru_SCRP333': {
      label: 'Phyru_SCRP333',
    index: 5, },
   }},
  'first-level-node-29':{
    label: 'Phytophthora sojae',
    index: 28,
     nodes:{
      'Physo_P6497': {
        label: 'Physo_P6497',
      index: 5, },
     }},
  // 'first-level-node-30':{
  //   label: 'Phytophthora syringae',
  //   index: 29,
  //    nodes:{}},
'first-level-node-31':{
  label: 'Phytophthora taxon totara',
  index: 30,
   nodes:{
    'Phyta_toNZFS3642': {
      label: 'Phyta_toNZFS3642',
    index: 5, },
    'Phyta_toNZFS3727': {
      label: 'Phyta_toNZFS3727',
    index: 5, },
   }},
  //  'first-level-node-31':{
  //   label: 'Phytophthora x alni',
  //   index: 30,
  //    nodes:{}},
};

function Trees(){return(
  <TreeMenu data={treeData} />
)}
export default Trees;
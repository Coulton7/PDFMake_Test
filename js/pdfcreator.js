function pdfCreator(){

var orgName = document.getElementById('orgName');
var orgPhone = document.getElementById('orgPhone');
var orgEmail = document.getElementById('orgEmail');

var docDefinition = {
  content: [
    {text:'POLICY TO PREVENT GLOBAL WARMING', style: 'header'},
    {text:'The health of the Earth is essential to not just business, but also species survival.', style: 'subheader'},
    {text:[
       'The Health, Safety and Welfare of all the stakeholders in our Group is the primary concern of the Board of ', orgName.value, '.'
     ]
   },
    'The Group has consistently put sustainability projects first for capital investment and has now decided to debate and publish a policy to prevent global warming through technological change and investment decisions.',
    {
    ul: [
      'Any sustainability project will be given priority over any other capital investment with a similar Return on Investment.',
      {text:[ 'Any sustainability project with a reasonable chance of getting a Return on Investment of 4 years or less, should be brought to the attention of the ', orgName.value, '.']},
      'A written decision on any such project is mandatory within 3 months of project submission.',
      'All global business heads have local spending authority. Any sustainability project with a higher value should be immediately referred to the Board of AES Engineering Ltd.',
      'As a Board we undertake to use our personal and corporate presence to influence policy makers to legislate the requirement for such a policy for all businesses with more than 250 co-workers.',
      'Current or potential supplier input is welcomed, including their use of the global hotline where necessary.'
    ],
  },
    {text:['The Board of', orgName.value, '. encourages the use of the global “hotline” on',  orgPhone.value, ' or by email on ', orgEmail.value, 'to assist with the discreet implementation of this policy where necessary.']}
  ],

  styles: {
    header: {
      fontSize: 18,
      alignment: 'center'
    },
    subheader: {
      fontSize: 15,
    },
    defaultStyle: {
      fontSize: 12
    }
  }
};

var pdf = pdfMake.createPdf(docDefinition).download();

console.log(orgName.value);
}

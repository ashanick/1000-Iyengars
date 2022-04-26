// import React from 'react';
import Tree from 'react-d3-tree';

const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Rascal',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Papa',
              },
              {
                name: 'Mama',
              },
            ],
          },
        ],
      },
    ],
  };


function FamilyTree(props) {
//   console.log('Family Tree ', props.items)
  return <div style={{ background: 'red'}}>
     <div  style={{  width: '50em', height: '20em' }}>
      <Tree  data={orgChart} />
    </div>
  </div>;
};

export default FamilyTree;

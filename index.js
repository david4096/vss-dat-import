#! /usr/bin/env node
var Dat = require('dat-node')
console.log('Welcome to datvar!!!!')
var directory = 'clinvar_data'
// 1. Tell Dat where to download the files
Dat(directory, {
  // 2. Tell Dat what link I want
  key: 'b1deb53c351b5f968d9f6742990ab3691da54000fe6afde2fb3024e07816fa51' // (a 64 character hash from above)
}, function (err, dat) {
  if (err) throw err
  console.log('Created a directory ' + directory +' and beginning transfer.');
  console.log('')
  console.log('If this is your first time downloading these data it may take a moment.')
  // 3. Join the network & download (files are automatically downloaded)
  dat.joinNetwork()
})

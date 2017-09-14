var Dat = require('dat-node')

// 1. Tell Dat where to download the files
Dat('clinvar_data', {
  // 2. Tell Dat what link I want
  key: 'b1deb53c351b5f968d9f6742990ab3691da54000fe6afde2fb3024e07816fa51' // (a 64 character hash from above)
}, function (err, dat) {
  if (err) throw err

  // 3. Join the network & download (files are automatically downloaded)
  dat.joinNetwork()
})

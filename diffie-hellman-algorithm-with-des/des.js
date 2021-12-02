const crypto = require('crypto');

exports.encryptDes = function(enData,KEY,IV){
    var cipher = crypto.createCipheriv('des', new Buffer(KEY), new Buffer(IV));
    var buf1 = cipher.update(enData, 'utf8');    
    var buf2 = cipher.final();
    const result = new Buffer.alloc(buf1.length + buf2.length);
    buf1.copy(result);
    buf2.copy(result, buf1.length);
    //return console.log('Encryption: ' + result.toString('base64'));
    return result.toString('base64');
};

exports.decryptDes = function(deData,KEY,IV){
    var cipher = crypto.createDecipheriv('des', new Buffer(KEY), new Buffer(IV));
    var buf1 = cipher.update(deData,'base64');
    var buf2 = cipher.final();
    const result = new Buffer.alloc(buf1.length + buf2.length);
    buf1.copy(result);
    buf2.copy(result, buf1.length);
    //console.log('Decryption：' + result.toString('utf8'));
    return result.toString('utf8');
};

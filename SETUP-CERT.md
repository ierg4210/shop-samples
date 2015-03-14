# SSL Certificate Deployment
References:
- [http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https.html](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https.html)
- [http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html)


# Key generation using OpenSSL
Make sure you've openssl installed, and do this in an *nix machine.

## Generate the private key
Keep it extra safe (never upload it to github)
```sh
$ openssl genrsa 2048 > privatekey.pem
Generating RSA private key, 2048 bit long modulus
......................+++
....................................................................................................................................+++
e is 65537 (0x10001)
```

## Create the Certificate Signing Request (CSR)
```sh
$ openssl req -new -key privatekey.pem -out csr.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:HK
State or Province Name (full name) [Some-State]:Hong Kong
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:CUHK
Organizational Unit Name (eg, section) []:IERG4210
Common Name (e.g. server FQDN or YOUR name) []:store00.ierg4210.org    
Email Address []:phfung@ie.cuhk.edu.hk

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```
To show your CSR:
```sh
$ cat csr.pem 
-----BEGIN CERTIFICATE REQUEST-----
MIICzjCCAbYCAQAwgYgxCzAJBgNVBAYTAkhLMRIwEAYDVQQIEwlIb25nIEtvbmcx
DTALBgNVBAoTBENVSEsxETAPBgNVBAsTCElFUkc0MjEwMR0wGwYDVQQDExRzdG9y
ZTAwLmllcmc0MjEwLm9yZzEkMCIGCSqGSIb3DQEJARYVcGhmdW5nQGllLmN1aGsu
ZWR1LmhrMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzKNBBygTWety
pYBBITUlwKNuqv8E/0+3Wozt7muaydXihgHDwQg3UpljwthEya/zRtujBUXfk5UG
WLeAY/eviIzoEHZSwYOc5DqKCv0D2nygXclDnhROGJaNHrXF+H/BboMAJLaNyB8M
AhOBqJ6FkKNYGwcWgLAJ4Hkgt4H+SumHEWOrQtTVVui9Ut1cXxbkGtTDNcEU70Aq
2lfviwZRXbxjC0LorALZGgMqUuO6sVQbyHqiA2yeSV0NUJW2atdcvKUdq7diEe4X
LuEBJ909H2Q3c0/WqDY860g8/9jaFDpbQTpgPbzkHhiAElMx6ibrez17vpm+Y8Kg
Bvr/YCUPEwIDAQABoAAwDQYJKoZIhvcNAQEFBQADggEBACb7cooaVurPze7MU9pd
SPFNXxt0tsNJR+nWixuz8ycRf1Ufuk5dfqm791o0rO5dI46ETD7de/G2Z4jUfqOm
2xJukWHCT5B4Z9J6xzjOQSenOy6H08KQ+TjfTegr+E8TfqHhLhdLPrH8Ap5uMr1G
IfeyPjGbxcoHSQrhT28wA1zUEp/X54kWdm/Zbp48jUpCn7uYL/DILsOinZi7DSxn
21V9UYJyn2kX8iVhZT900stUJZh1vL+ZqODEuge+WvdZr5wIbCT+h2em8Di9chXc
tusi+HEj62NJ579mUWNnZoSoU3Dr44DidfEUWQQyxNwanykx9ccKw/NNK+/T6x41
Saw=
-----END CERTIFICATE REQUEST-----
```

## Submit the CSR file to CA for a signed Certificate

Get a 90-day SSL Certifate from Comodo for free from [freessl.su](http://www.freessl.su/)
 - Your Name: `your name`
 - Your Email: `your own email address`
 - Phone: `your mobile phone / or dept phone number`
 - Select the server software used to generate the CSR: `Apache/ModSSL`
 - CSR: `copy & paste what you've generated in the last step`
 - For Domain Control Validation, choose `admin@ierg4210.org` as the approved email address to prove domain ownership. The teaching team upon receiving an email from Comodo will help you authuorize such a SSL cert application.
 - Choose the free option (in russian, `Бесплатно`)

It then take an hour or up to 2 days to have the cert signed by Comodo and emailed to you (in an attachment ssl_certificate.zip).

### Upload your CA-signed cert and private key to elastic beanstalk

Install the aws client
```sh
$ . local-dev-env/bin/activate
$ pip install aws
```

Upload the private key and signed cert
```sh
$ aws iam upload-server-certificate --server-certificate-name comodo-signed-shop00-2015 --certificate-body file://~/Downloads/ssl_certificate/store00_ierg4210_org.crt --private-key file://priv.pem --certificate-chain file://~/Downloads/ssl_certificate/store00_ierg4210_org.ca-bundle
{
    "ServerCertificateMetadata": {
        "ServerCertificateId": "ASCAI2ANDS6WNBM6GWGCK", 
        "ServerCertificateName": "comodo-signed-shop00-2015", 
        "Expiration": "2015-06-11T23:59:59Z", 
        "Path": "/", 
        "Arn": "arn:aws:iam::832234303658:server-certificate/comodo-signed-shop00-2015", 
        "UploadDate": "2015-03-13T17:59:20.397Z"
    }
}
```

Then go to the online AWS console to update your load balancer configuration settings in your Elastic Beanstalk environment with the following information:
- HTTP port — set this port to 80
- HTTPS port — set this port to 443
- SSL certificate ID — set this to your ARN (i.e., comodo-signed-shop00-2015)

After the settings, it may take a few minutes to take effect.
Visit `https://shop00.ierg4210.org` to verify.


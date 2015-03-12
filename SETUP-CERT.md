# Generating Certificate using OpenSSL


## Generate the private key, which you'll keep it extra safe (never upload it to github)
```sh
$ openssl genrsa 2048 > priv.pem
Generating RSA private key, 2048 bit long modulus
......................+++
....................................................................................................................................+++
e is 65537 (0x10001)
```

## Create the Certificate Signing Request (CSR)
```sh
$ openssl req -new -key priv.pem -out csr.pem
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

# Submit the CSR file to CA for a signed Certificate



## MSR - Backoffice - Frontend

Aplicación frontend del backoffice de Starbucks Reward

### Blueprints
Ember nos deja generar automaticamente archivos; ademas de los default creamos:

* `ember generate servicios [nombre-del-servicio]`: Servicios (+ su mixin para injectarlos)


### Pre-requisitos del ambiente

#### Node y NPM 4.0
Tomado de: https://nodejs.org/en/download/ (tiene instrucciones especificas por OS)

##### En Ubuntu
```
wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -  
sudo apt-get install -y nodejs  
sudo apt-get install -y build-essential
```

o usar [`nvm`](https://github.com/creationix/nvm) para manejar multiples versiones de `node.js`

Verificar que anduvo:
`node -v`  

> `v4.4.0`  

`npm -v`

> `2.14.20`  

#### Bower
`npm install -g bower`  
Corroborar con:  `bower -v`
> `1.7.7`  

#### Watchman (para observar cambios en archivos)
$ sudo apt-get install autoconf python-dev
$ cd instalados
$ git clone https://github.com/facebook/watchman.git
$ cd watchman
$ git checkout v4.5.0  # the latest stable release
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install
$ watchman -v
> `4.5.0`

#### Ember
`sudo npm install -g ember-cli`  
Corroborar con: `ember -v`  
> `version: 2.4.2`

#### PhantomJS (para tests)
`npm install -g phantomjs-prebuilt`

## Setup proyecto
y cada vez que se cambia el `package.json` y/o el `bower.json`
```
npm install  
bower install
```

## Correr server en desarrollo con el server de Java
`npm start`
La app corre en [http://localhost:9333/msr-backoffice/web](http://localhost:9333/msr-backoffice/web), sirviendo los archivos en el backend

## Correr server en con un proxy.
**Deprecado**

`npm run startProxy`
La app corre en [http://localhost:4200](http://localhost:4200), proxeando el backend.

## Correr los tests
`npm test`

_(Nota al lector: Si falla JSHint, falla el test)_

### Compilar

* `ember build` (development)
* `npm build` (production)



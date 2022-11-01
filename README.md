# jwt-decoder

JSON Web Tokens decoder

<!-- TOC -->

- [JWT Decoder](#jwt-decoder)
  - [Download](#download)
  - [Usage](#usage)
  - [API](#api)
    - [decodeToken](#decodetoken)
    - [Argument](#argument)
  - [Example](#example)
    - [On Javascript](#on-javascript)
    - [On Typescript](#on-typescript)

<!-- /TOC -->

## Download

Using npm:

```shell
$ npm i @leteu/jwt-decoder
```

Using yarn:

```shell
$ yarn add @leteu/jwt-decoder
```

## Usage

```ts
import { decodeToken } from '@leteu/jwt-decoder'
// or
import decodeToken from '@leteu/jwt-decoder'
```

## API

### decodeToken

```ts
function decodeToken<T>(token: string): T | undefined
```

Supported generic type for return

#### Argument

`token`

| Type   | Required |
| ------ | -------- |
| string | true     |

## Example

### On Javascript

```ts
import { decodeToken } from '@leteu/jwt-decoder'

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const decode = decodeToken(jwt)

console.log(decode)
/*
  {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
*/
```

### On Typescript

```ts
import { decodeToken } from '@leteu/jwt-decoder'

interface DecodeInterface {
  sub: string
  name: string
  iat: number
}

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const decode = decodeToken<DecodeInterface>(jwt)

console.log(decode)
/*
  {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
*/
```

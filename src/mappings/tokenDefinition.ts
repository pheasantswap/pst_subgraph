import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(7)

    let tokenNABOX = new TokenDefinition(
      Address.fromString('0x1A584204Db35460a32e7d9990aC1874cB9FB0827'),
      'NABOX',
      'Nabox_Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenNABOX)

    let tokenWETH = new TokenDefinition(
      Address.fromString('0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f'),
      'WETH',
      'Wrapped Ether',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenWETH)

    let tokenUSDC = new TokenDefinition(
      Address.fromString('0x176211869cA2b568f2A7D4EE941E073a821EE1ff'),
      'USDC',
      'USDC',
      BigInt.fromI32(6)
    )
    staticDefinitions.push(tokenUSDC)

    let tokenLinea = new TokenDefinition(
      Address.fromString('0xB73bE36A9cbD5f3B6658bf584D00787269F59225'),
      'linea',
      'linea',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenLinea)

    let tokenNerc20 = new TokenDefinition(
      Address.fromString('0xF3Cb1Dca9fba743952273E353b44976FA58c30eC'),
      'nerc',
      'NERC20 Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenNerc20)

    let tokenUSDTN = new TokenDefinition(
      Address.fromString('0x266f4BAe40dC982BE323F3B0208C53CE886FaCfB'),
      'USDTN',
      'USDTN',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUSDTN)

    let tokenNVT = new TokenDefinition(
      Address.fromString('0xB9B964660b3BD08829824a9e41d1BE376AD81BE3'),
      'NVT',
      'NVT',
      BigInt.fromI32(8)
    )
    staticDefinitions.push(tokenNVT)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}

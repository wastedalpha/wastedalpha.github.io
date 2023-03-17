/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: wavedaemons.js
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js file for wavedaemons.html
 */
"use strict";

const getProof = require("./web3/checkWhitelisted.js");
// the wave daemons
const CA = "0x8a4995448996c1c65eda73efec6cffda180a6e7e";
const ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address[]","name":"_adminWithMultiSig","type":"address[]"},{"internalType":"bytes32","name":"_root","type":"bytes32"}],"stateMutability":"payable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"action","type":"string"},{"indexed":false,"internalType":"address","name":"claimant","type":"address"}],"name":"whiskeyClaimed","type":"event"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"adminMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"claimWhiskey","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enable","type":"bool"}],"name":"enableMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFullRedeemList","outputs":[{"components":[{"internalType":"uint256","name":"redeemTimeStamp","type":"uint256"},{"internalType":"address","name":"redeemerAddress","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"bool","name":"redeemed","type":"bool"}],"internalType":"struct WastedAlpha.RedeemableWhiskey[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getWhiskeyObject","outputs":[{"components":[{"internalType":"uint256","name":"redeemTimeStamp","type":"uint256"},{"internalType":"address","name":"redeemerAddress","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"bool","name":"redeemed","type":"bool"}],"internalType":"struct WastedAlpha.RedeemableWhiskey","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"isWhiskeyClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listOfRedeemed","outputs":[{"internalType":"uint256","name":"redeemTimeStamp","type":"uint256"},{"internalType":"address","name":"redeemerAddress","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"bool","name":"redeemed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newCostInWei","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhiskeyClaimable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelistOnlyMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newRoot","type":"bytes32"}],"name":"updateRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"whiteListMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

// Useful for later you'll see
let saleStart;
let mintFees;
const rpc = 'https://rpc.testnet.fantom.network/';

// after window is loaded completely (load screen)
window.onload = function(){
  //hide the preloader
  //$(".preloader").fadeOut(1000);
  //setTimeout(() => {
  //  document.querySelector(".preloader").style.display = "none";
  //}, 1000);

  setTheNumbers();
}
//const getProof = require("../web3/checkWhitelisted")
// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Add's networks to metamask
async function addNetwork(id) {
  let networkData;
  switch (id) {
    //Fantom
    case 4002:
      networkData = [
        {
          chainId: "0xfa2",
          chainName: "Fantom Testnet",
          rpcUrls: ["https://rpc.testnet.fantom.network/"],
          nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.ftmscan.com/"],
        },
      ];
      break;
    default:
      break;
  }

  // add these
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}

// Address of the selected account
let selectedAccount;

// init() web3modal
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  //if(location.protocol !== 'https:') {
    //const alert = document.querySelector("#alert-error-https");
    //alert.style.display = "block";
    //document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    //return;
  //}
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "66e9cad39c594d7d93f5a93104cdf16e", //MaxflowO2 keys might not get milage
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        key: "pk_live_1EBC325C45415739" //MaxflowO2 keys might not get milage
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

// UI for fetchAccountData()
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log("Web3 instance is", web3);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  console.log("Selected Account is", selectedAccount);

  await checkWL();
  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";

  // Display address over Disconnect
  var startString = selectedAccount.substring(0,3);
  var dots ="…";
  var endString = selectedAccount.substring(selectedAccount.length - 3)
  var display = startString+dots+endString;
  document.getElementById("addWallet").innerHTML = display.toUpperCase();
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */

async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}

// "connect button"
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  await swapChain("0xfa2", 4002); //SWAP FOR ETH MAINNET

  fetchAccountData();

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

}

// "disconnect button"
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}

// These set/swap chains immediately... useful later in this plethora of wtf
async function swapChain(network, number) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: network }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // if it is not, then install it into the user MetaMask
    if (error.code === 4902) {
      try {
        addNetwork(number);
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

// fetch times from contract
async function fetchStartTime() {
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  saleStart = await tokenContract.methods.showStart().call();
}

// Update the count down every 5 seconds
// rewritten to web2 => web3 via contract abi... using FTM for the web3
// all contracts will have same datum
window.setInterval(async () => {
  setTheNumbers();
}, 5000);

// web3 call() for how many have minted on that contract
async function queryMinted() {
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.totalSupply().call();
  //console.log(value, "has been minted");
  return value;
}



// cost per mint in ETH
async function fetchMintFee(){
  const web3 = new Web3(rpc);
  let NFTContract = await new web3.eth.Contract(ABI, CA);
  let value = await NFTContract.methods.price().call();
  if(!value){
    console.error("Can not fetch price() on contract");
    return 0;
  }
  return value;
}

// puts the above together with innerHTML rewrite could go innerTEXT as well
async function setTheNumbers() {
  let theCount = await queryMinted();
  document.getElementById("count").innerHTML = theCount;
}


async function mintNFT() {
  let quant = parseInt(document.getElementById('quantNFT').innerHTML);
  mintFees = await fetchMintFee();
  let value = quant * mintFees;
  const web3 = new Web3(provider);
  let tdContract = await new web3.eth.Contract(ABI, CA);

  let wl = await isWL();
  let proof = getProof(selectedAccount);
  // if (wl == 1){
  //   let mintIt = tdContract
  //                   .methods
  //                   .whiteListMint(quant, proof)
  //                   .send({ from: selectedAccount, value: value*0.75})
  //                   .on(
  //                     'transactionHash',
  //                     function(hash) {
  //                     console.log(`whitelistMint(${quant})`, hash);
  //                      }
  //                   );
  //                 }
  // else {
  // let mintIt = tdContract
  //                 .methods
  //                 .mint(quant)
  //                 .send({ from: selectedAccount, value: value})
  //                 .on(
  //                   'transactionHash',
  //                   function(hash) {
  //                   console.log(`publicMint(${quant})`, hash);
  //                    }
  //                  );
  //               }
  //   if (!mintIt) {
  //     console.log(`Failed Mint(${quant})`);
  //   }
  try {
    if (wl == 1) {
    await tdContract
                  .methods
                  .whiteListMint(quant, proof)
                  .send({ from: selectedAccount, value: value*0.75})
                  .on(
                    'transactionHash',
                    function(hash) {
                    console.log(`whitelistMint(${quant})`, hash);
                     }
                  );
  }else {
    await tdContract
                    .methods
                    .mint(quant)
                    .send({ from: selectedAccount, value: value})
                    .on(
                      'transactionHash',
                      function(hash) {
                      console.log(`publicMint(${quant})`, hash);
                       }
                     );
                  }
  } catch (error) {
    console.log(error, `Failed Mint(${quant})`);
  }
}

async function plusQuant(){
  let oldQuant = parseInt(document.getElementById('quantNFT').innerHTML);
  console.log(`old quantity is ${oldQuant}`);
  let newQuant;
  if (oldQuant < 5) {
    newQuant = oldQuant + 1;}
  else {
    newQuant = oldQuant;
  }
  console.log(`new quantity is ${newQuant}`);
  document.getElementById("quantNFT").innerHTML = newQuant;
}

async function minusQuant(){
  let oldQuant = parseInt(document.getElementById('quantNFT').innerHTML);
  //console.log(`old quantity is ${oldQuant}`);
  let newQuant;
  if (oldQuant > 1) {
    newQuant = oldQuant - 1;}
  else {
    newQuant = oldQuant;
  }
  //console.log(`new quantity is ${newQuant}`);
  document.getElementById("quantNFT").innerHTML = newQuant;
}
async function isWL(){
  let proof = getProof(selectedAccount);
  console.log(`proof follows for account: ${selectedAccount}`)
  console.log(proof);
  console.log(`proof length: ${proof.length}`)
  let bool;
  if (proof.length > 0){
    bool = 1;
  }
  else {
    bool = 0;
  }
  return bool;
}

async function checkWL(){

  let bool = await isWL();
  console.log(`bool_in = ${bool}`);

  if (bool == 1) {
    document.getElementById("wl-status").innerHTML = "<h3>WL STATUS: ✅👍🥂</h3>";
  }
  else {
    document.getElementById("wl-status").innerHTML = "<h3>WL STATUS: ❌🥺🙏</h3>";
  }
}

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#btn-buyNFT").addEventListener("click", mintNFT);
  document.querySelector("#quant-plus").addEventListener("click", plusQuant);
  document.querySelector("#quant-minus").addEventListener("click", minusQuant);
});

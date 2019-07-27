# VLDB-demo

## How to configure for this demo

To see the spark ui information, we need to configure to connect master nodes of in our mini clusters.

- Step 1. In you local machine, dynamically forward requests in a port (say port 2000) to Ercilla.
    ```bash 
    # for example.
    ssh -N -f -D localhost:2000 chenghao@ercilla.polytechnique.fr
    ```

- Step 2. Open a browser, use a socks 5 server to forward all the requests in the browser to localhost:2000. Have a [test](http://10.0.0.7:18088/history/application_1556053183124_3882/SQL/) when you finish configuring the proxy.

    - For Firefox, Preferences > Network Settings > Settings. Choose "Manual proxy configuration":
        
        ![firefox](images/firefox-socks.png)

    - For Chrome, using a similar approach to forword requests to localhost:2000. Or install a [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif). Then, add a proxy profile with { Protocal: SOCKS5, Server: localhost, Port: 2000 }

        ![chrome](images/chrome-socks.png)


- Step 3. Fix the problem of `Load denied by X-Frame-Options: does not permit framing` when trying to embed the spark ui.

    - For Firefox, install the add-on [Ignore X-Frame-Options Header](https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/)

    - For Chrome, install the extension [Ingore X-Frame headers](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe)

- Step 4. Modify the hosts in local machine. Add all the lines in `hosts.ercilla`  to your `/etc/hosts` for Mac OS or Linxu. (You may need the root privilege to add those lines)

- Step 5. try `node13-opa:8088` to see if the proxy setting works.
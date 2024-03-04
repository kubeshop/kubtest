## testkube set

Set resources

### Synopsis

Set available resources, like context etc

```
testkube set <resourceName> [flags]
```

### Options

```
  -h, --help   help for set
```

### Options inherited from parent commands

```
  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results")
  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")
      --insecure           insecure connection for direct client
      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")
      --oauth-enabled      enable oauth
      --verbose            show additional debug messages
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin
* [testkube set context](testkube_set_context.md)	 - Set context data for Testkube Pro

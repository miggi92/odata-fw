const color = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  "neutral"
] as const

export default {
  "slots": {
    "base": [
      "group relative block px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0",
      "transition-colors"
    ],
    "icon": [
      "size-4 shrink-0 align-sub me-1.5",
      "transition-colors"
    ],
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "base": "border border-primary/25 bg-primary/10 text-primary-600 dark:text-primary-300 [&_a]:text-primary [&_a]:hover:border-primary [&_code]:text-primary-600 dark:[&_code]:text-primary-300 [&_code]:border-primary/25 [&_a]:hover:[&>code]:border-primary [&_a]:hover:[&>code]:text-primary [&>ul]:marker:text-primary/50",
        "icon": "text-primary",
        "externalIcon": "text-primary-600 dark:text-primary-300"
      },
      "secondary": {
        "base": "border border-secondary/25 bg-secondary/10 text-secondary-600 dark:text-secondary-300 [&_a]:text-secondary [&_a]:hover:border-secondary [&_code]:text-secondary-600 dark:[&_code]:text-secondary-300 [&_code]:border-secondary/25 [&_a]:hover:[&>code]:border-secondary [&_a]:hover:[&>code]:text-secondary [&>ul]:marker:text-secondary/50",
        "icon": "text-secondary",
        "externalIcon": "text-secondary-600 dark:text-secondary-300"
      },
      "success": {
        "base": "border border-success/25 bg-success/10 text-success-600 dark:text-success-300 [&_a]:text-success [&_a]:hover:border-success [&_code]:text-success-600 dark:[&_code]:text-success-300 [&_code]:border-success/25 [&_a]:hover:[&>code]:border-success [&_a]:hover:[&>code]:text-success [&>ul]:marker:text-success/50",
        "icon": "text-success",
        "externalIcon": "text-success-600 dark:text-success-300"
      },
      "info": {
        "base": "border border-info/25 bg-info/10 text-info-600 dark:text-info-300 [&_a]:text-info [&_a]:hover:border-info [&_code]:text-info-600 dark:[&_code]:text-info-300 [&_code]:border-info/25 [&_a]:hover:[&>code]:border-info [&_a]:hover:[&>code]:text-info [&>ul]:marker:text-info/50",
        "icon": "text-info",
        "externalIcon": "text-info-600 dark:text-info-300"
      },
      "warning": {
        "base": "border border-warning/25 bg-warning/10 text-warning-600 dark:text-warning-300 [&_a]:text-warning [&_a]:hover:border-warning [&_code]:text-warning-600 dark:[&_code]:text-warning-300 [&_code]:border-warning/25 [&_a]:hover:[&>code]:border-warning [&_a]:hover:[&>code]:text-warning [&>ul]:marker:text-warning/50",
        "icon": "text-warning",
        "externalIcon": "text-warning-600 dark:text-warning-300"
      },
      "error": {
        "base": "border border-error/25 bg-error/10 text-error-600 dark:text-error-300 [&_a]:text-error [&_a]:hover:border-error [&_code]:text-error-600 dark:[&_code]:text-error-300 [&_code]:border-error/25 [&_a]:hover:[&>code]:border-error [&_a]:hover:[&>code]:text-error [&>ul]:marker:text-error/50",
        "icon": "text-error",
        "externalIcon": "text-error-600 dark:text-error-300"
      },
      "neutral": {
        "base": "border border-muted bg-muted text-default",
        "icon": "text-highlighted",
        "externalIcon": "text-dimmed"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "secondary" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-secondary",
        "externalIcon": "group-hover:text-secondary"
      }
    },
    {
      "color": "success" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-success",
        "externalIcon": "group-hover:text-success"
      }
    },
    {
      "color": "info" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-info",
        "externalIcon": "group-hover:text-info"
      }
    },
    {
      "color": "warning" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-warning",
        "externalIcon": "group-hover:text-warning"
      }
    },
    {
      "color": "error" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral" as typeof color[number]
  }
}
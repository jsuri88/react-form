import {
  Addon_TypesEnum,
  CHANNEL_CREATED,
  Provider,
  __assign,
  __rest,
  __spreadArray,
  _extends,
  addons,
  createBrowserChannel,
  curriedDarken$1,
  curriedLighten$1,
  curriedTransparentize$1,
  dist_exports as dist_exports2,
  dist_exports2 as dist_exports3,
  dist_exports3 as dist_exports4,
  dist_exports4 as dist_exports5,
  dist_exports5 as dist_exports7,
  mockChannel,
  renderStorybookUI,
  rgba,
} from './chunk-AZQPOWW7.js'
import './chunk-V7GYLJLR.js'
import {require_react_dom} from './chunk-SJD7EFYL.js'
import './chunk-JMPBYCHU.js'
import {
  dist_exports,
  dist_exports2 as dist_exports6,
  newStyled,
  scope,
} from './chunk-6KNXZZZ5.js'
import './chunk-JSPL73I3.js'
import './chunk-GBCXFRBK.js'
import {require_react} from './chunk-DP4DR4LA.js'
import {__export, __toESM} from './chunk-Z4NRYNHR.js'
var REACT = __toESM(require_react()),
  REACTDOM = __toESM(require_react_dom())
var experimental_exports = {}
__export(experimental_exports, {
  Button: () => Button2,
  Icon: () => dist_exports8,
  Input: () => Input,
  Link: () => Link2,
  Select: () => Select,
})
var React8 = __toESM(require_react(), 1),
  import_react23 = __toESM(require_react(), 1)
var import_react21 = __toESM(require_react(), 1),
  import_react_dom4 = __toESM(require_react_dom(), 1)
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
  return Math.min(max, Math.max(min, value))
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
  originalEventHandler,
  ourEventHandler,
  {checkForDefaultPrevented = !0} = {}
) {
  return function (event) {
    if (
      (originalEventHandler?.(event),
      checkForDefaultPrevented === !1 || !event.defaultPrevented)
    )
      return ourEventHandler?.(event)
  }
}
var import_react4 = __toESM(require_react(), 1)
var import_react = __toESM(require_react(), 1)
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(
  scopeName,
  createContextScopeDeps = []
) {
  let defaultContexts = []
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(
    rootComponentName,
    defaultContext
  ) {
    let BaseContext = (0, import_react.createContext)(defaultContext),
      index2 = defaultContexts.length
    defaultContexts = [...defaultContexts, defaultContext]
    function Provider2(props) {
      let {scope: scope2, children, ...context} = props,
        Context = scope2?.[scopeName][index2] || BaseContext,
        value = (0, import_react.useMemo)(() => context, Object.values(context))
      return (0, import_react.createElement)(
        Context.Provider,
        {value},
        children
      )
    }
    function useContext(consumerName, scope2) {
      let Context = scope2?.[scopeName][index2] || BaseContext,
        context = (0, import_react.useContext)(Context)
      if (context) return context
      if (defaultContext !== void 0) return defaultContext
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``
      )
    }
    return (
      (Provider2.displayName = rootComponentName + 'Provider'),
      [Provider2, useContext]
    )
  }
  let createScope = () => {
    let scopeContexts = defaultContexts.map((defaultContext) =>
      (0, import_react.createContext)(defaultContext)
    )
    return function (scope2) {
      let contexts = scope2?.[scopeName] || scopeContexts
      return (0, import_react.useMemo)(
        () => ({[`__scope${scopeName}`]: {...scope2, [scopeName]: contexts}}),
        [scope2, contexts]
      )
    }
  }
  return (
    (createScope.scopeName = scopeName),
    [
      $c512c27ab02ef895$export$fd42f52fd3ae1109,
      $c512c27ab02ef895$var$composeContextScopes(
        createScope,
        ...createContextScopeDeps
      ),
    ]
  )
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  let baseScope = scopes[0]
  if (scopes.length === 1) return baseScope
  let createScope1 = () => {
    let scopeHooks = scopes.map((createScope) => ({
      useScope: createScope(),
      scopeName: createScope.scopeName,
    }))
    return function (overrideScopes) {
      let nextScopes1 = scopeHooks.reduce(
        (nextScopes, {useScope, scopeName}) => {
          let currentScope = useScope(overrideScopes)[`__scope${scopeName}`]
          return {...nextScopes, ...currentScope}
        },
        {}
      )
      return (0, import_react.useMemo)(
        () => ({[`__scope${baseScope.scopeName}`]: nextScopes1}),
        [nextScopes1]
      )
    }
  }
  return (createScope1.scopeName = baseScope.scopeName), createScope1
}
var import_react2 = __toESM(require_react(), 1)
function $6ed0406888f73fc4$var$setRef(ref, value) {
  typeof ref == 'function' ? ref(value) : ref != null && (ref.current = value)
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) =>
    refs.forEach((ref) => $6ed0406888f73fc4$var$setRef(ref, node))
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react2.useCallback)(
    $6ed0406888f73fc4$export$43e446d32b3d21af(...refs),
    refs
  )
}
var import_react3 = __toESM(require_react(), 1)
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = (0, import_react3.forwardRef)(
  (props, forwardedRef) => {
    let {children, ...slotProps} = props,
      childrenArray = import_react3.Children.toArray(children),
      slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable)
    if (slottable) {
      let newElement = slottable.props.children,
        newChildren = childrenArray.map((child) =>
          child === slottable
            ? import_react3.Children.count(newElement) > 1
              ? import_react3.Children.only(null)
              : (0, import_react3.isValidElement)(newElement)
              ? newElement.props.children
              : null
            : child
        )
      return (0, import_react3.createElement)(
        $5e63c961fc1ce211$var$SlotClone,
        _extends({}, slotProps, {ref: forwardedRef}),
        (0, import_react3.isValidElement)(newElement)
          ? (0, import_react3.cloneElement)(newElement, void 0, newChildren)
          : null
      )
    }
    return (0, import_react3.createElement)(
      $5e63c961fc1ce211$var$SlotClone,
      _extends({}, slotProps, {ref: forwardedRef}),
      children
    )
  }
)
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot'
var $5e63c961fc1ce211$var$SlotClone = (0, import_react3.forwardRef)(
  (props, forwardedRef) => {
    let {children, ...slotProps} = props
    return (0, import_react3.isValidElement)(children)
      ? (0, import_react3.cloneElement)(children, {
          ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
          ref: forwardedRef
            ? $6ed0406888f73fc4$export$43e446d32b3d21af(
                forwardedRef,
                children.ref
              )
            : children.ref,
        })
      : import_react3.Children.count(children) > 1
      ? import_react3.Children.only(null)
      : null
  }
)
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone'
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({children}) =>
  (0, import_react3.createElement)(import_react3.Fragment, null, children)
function $5e63c961fc1ce211$var$isSlottable(child) {
  return (
    (0, import_react3.isValidElement)(child) &&
    child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
  )
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  let overrideProps = {...childProps}
  for (let propName in childProps) {
    let slotPropValue = slotProps[propName],
      childPropValue = childProps[propName]
    ;/^on[A-Z]/.test(propName)
      ? slotPropValue && childPropValue
        ? (overrideProps[propName] = (...args) => {
            childPropValue(...args), slotPropValue(...args)
          })
        : slotPropValue && (overrideProps[propName] = slotPropValue)
      : propName === 'style'
      ? (overrideProps[propName] = {...slotPropValue, ...childPropValue})
      : propName === 'className' &&
        (overrideProps[propName] = [slotPropValue, childPropValue]
          .filter(Boolean)
          .join(' '))
  }
  return {...slotProps, ...overrideProps}
}
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  let PROVIDER_NAME = name + 'CollectionProvider',
    [createCollectionContext, createCollectionScope] =
      $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME),
    [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
      PROVIDER_NAME,
      {collectionRef: {current: null}, itemMap: new Map()}
    ),
    CollectionProvider = (props) => {
      let {scope: scope2, children} = props,
        ref = import_react4.default.useRef(null),
        itemMap = import_react4.default.useRef(new Map()).current
      return import_react4.default.createElement(
        CollectionProviderImpl,
        {scope: scope2, itemMap, collectionRef: ref},
        children
      )
    },
    COLLECTION_SLOT_NAME = name + 'CollectionSlot',
    CollectionSlot = import_react4.default.forwardRef((props, forwardedRef) => {
      let {scope: scope2, children} = props,
        context = useCollectionContext(COLLECTION_SLOT_NAME, scope2),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          context.collectionRef
        )
      return import_react4.default.createElement(
        $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        {ref: composedRefs},
        children
      )
    }),
    ITEM_SLOT_NAME = name + 'CollectionItemSlot',
    ITEM_DATA_ATTR = 'data-radix-collection-item',
    CollectionItemSlot = import_react4.default.forwardRef(
      (props, forwardedRef) => {
        let {scope: scope2, children, ...itemData} = props,
          ref = import_react4.default.useRef(null),
          composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
            forwardedRef,
            ref
          ),
          context = useCollectionContext(ITEM_SLOT_NAME, scope2)
        return (
          import_react4.default.useEffect(
            () => (
              context.itemMap.set(ref, {ref, ...itemData}),
              () => void context.itemMap.delete(ref)
            )
          ),
          import_react4.default.createElement(
            $5e63c961fc1ce211$export$8c6ed5c666ac1360,
            {[ITEM_DATA_ATTR]: '', ref: composedRefs},
            children
          )
        )
      }
    )
  function useCollection(scope2) {
    let context = useCollectionContext(name + 'CollectionConsumer', scope2)
    return import_react4.default.useCallback(() => {
      let collectionNode = context.collectionRef.current
      if (!collectionNode) return []
      let orderedNodes = Array.from(
        collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`)
      )
      return Array.from(context.itemMap.values()).sort(
        (a3, b3) =>
          orderedNodes.indexOf(a3.ref.current) -
          orderedNodes.indexOf(b3.ref.current)
      )
    }, [context.collectionRef, context.itemMap])
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot,
    },
    useCollection,
    createCollectionScope,
  ]
}
var import_react5 = __toESM(require_react(), 1),
  $f631663db3294ace$var$DirectionContext = (0, import_react5.createContext)(
    void 0
  )
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  let globalDir = (0, import_react5.useContext)(
    $f631663db3294ace$var$DirectionContext
  )
  return localDir || globalDir || 'ltr'
}
var import_react9 = __toESM(require_react(), 1)
var import_react6 = __toESM(require_react(), 1),
  import_react_dom = __toESM(require_react_dom(), 1)
var $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  $8927f6f2acc4f386$export$250ffa63cdc0d034 =
    $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
      let Node = (0, import_react6.forwardRef)((props, forwardedRef) => {
        let {asChild, ...primitiveProps} = props,
          Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node
        return (
          (0, import_react6.useEffect)(() => {
            window[Symbol.for('radix-ui')] = !0
          }, []),
          (0, import_react6.createElement)(
            Comp,
            _extends({}, primitiveProps, {ref: forwardedRef})
          )
        )
      })
      return (
        (Node.displayName = `Primitive.${node}`), {...primitive, [node]: Node}
      )
    }, {})
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  target && (0, import_react_dom.flushSync)(() => target.dispatchEvent(event))
}
var import_react7 = __toESM(require_react(), 1)
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  let callbackRef = (0, import_react7.useRef)(callback)
  return (
    (0, import_react7.useEffect)(() => {
      callbackRef.current = callback
    }),
    (0, import_react7.useMemo)(
      () =>
        (...args) => {
          var _callbackRef$current
          return (_callbackRef$current = callbackRef.current) === null ||
            _callbackRef$current === void 0
            ? void 0
            : _callbackRef$current.call(callbackRef, ...args)
        },
      []
    )
  )
}
var import_react8 = __toESM(require_react(), 1)
function $addc16e1bbe58fd0$export$3a72a57244d6e765(
  onEscapeKeyDownProp,
  ownerDocument = globalThis?.document
) {
  let onEscapeKeyDown =
    $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp)
  ;(0, import_react8.useEffect)(() => {
    let handleKeyDown = (event) => {
      event.key === 'Escape' && onEscapeKeyDown(event)
    }
    return (
      ownerDocument.addEventListener('keydown', handleKeyDown),
      () => ownerDocument.removeEventListener('keydown', handleKeyDown)
    )
  }, [onEscapeKeyDown, ownerDocument])
}
var $5cb92bef7577960e$var$CONTEXT_UPDATE = 'dismissableLayer.update',
  $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE =
    'dismissableLayer.pointerDownOutside',
  $5cb92bef7577960e$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside',
  $5cb92bef7577960e$var$originalBodyPointerEvents,
  $5cb92bef7577960e$var$DismissableLayerContext = (0,
  import_react9.createContext)({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  $5cb92bef7577960e$export$177fb62ff3ec1f22 = (0, import_react9.forwardRef)(
    (props, forwardedRef) => {
      var _node$ownerDocument
      let {
          disableOutsidePointerEvents = !1,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          onDismiss,
          ...layerProps
        } = props,
        context = (0, import_react9.useContext)(
          $5cb92bef7577960e$var$DismissableLayerContext
        ),
        [node1, setNode] = (0, import_react9.useState)(null),
        ownerDocument =
          (_node$ownerDocument = node1?.ownerDocument) !== null &&
          _node$ownerDocument !== void 0
            ? _node$ownerDocument
            : globalThis?.document,
        [, force] = (0, import_react9.useState)({}),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => setNode(node)
        ),
        layers = Array.from(context.layers),
        [highestLayerWithOutsidePointerEventsDisabled] = [
          ...context.layersWithOutsidePointerEventsDisabled,
        ].slice(-1),
        highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(
          highestLayerWithOutsidePointerEventsDisabled
        ),
        index2 = node1 ? layers.indexOf(node1) : -1,
        isBodyPointerEventsDisabled =
          context.layersWithOutsidePointerEventsDisabled.size > 0,
        isPointerEventsEnabled =
          index2 >= highestLayerWithOutsidePointerEventsDisabledIndex,
        pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside(
          (event) => {
            let target = event.target,
              isPointerDownOnBranch = [...context.branches].some((branch) =>
                branch.contains(target)
              )
            !isPointerEventsEnabled ||
              isPointerDownOnBranch ||
              (onPointerDownOutside?.(event),
              onInteractOutside?.(event),
              event.defaultPrevented || onDismiss?.())
          },
          ownerDocument
        ),
        focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
          let target = event.target
          ;[...context.branches].some((branch) => branch.contains(target)) ||
            (onFocusOutside?.(event),
            onInteractOutside?.(event),
            event.defaultPrevented || onDismiss?.())
        }, ownerDocument)
      return (
        $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
          index2 === context.layers.size - 1 &&
            (onEscapeKeyDown?.(event),
            !event.defaultPrevented &&
              onDismiss &&
              (event.preventDefault(), onDismiss()))
        }, ownerDocument),
        (0, import_react9.useEffect)(() => {
          if (node1)
            return (
              disableOutsidePointerEvents &&
                (context.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  (($5cb92bef7577960e$var$originalBodyPointerEvents =
                    ownerDocument.body.style.pointerEvents),
                  (ownerDocument.body.style.pointerEvents = 'none')),
                context.layersWithOutsidePointerEventsDisabled.add(node1)),
              context.layers.add(node1),
              $5cb92bef7577960e$var$dispatchUpdate(),
              () => {
                disableOutsidePointerEvents &&
                  context.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (ownerDocument.body.style.pointerEvents =
                    $5cb92bef7577960e$var$originalBodyPointerEvents)
              }
            )
        }, [node1, ownerDocument, disableOutsidePointerEvents, context]),
        (0, import_react9.useEffect)(
          () => () => {
            node1 &&
              (context.layers.delete(node1),
              context.layersWithOutsidePointerEventsDisabled.delete(node1),
              $5cb92bef7577960e$var$dispatchUpdate())
          },
          [node1, context]
        ),
        (0, import_react9.useEffect)(() => {
          let handleUpdate = () => force({})
          return (
            document.addEventListener(
              $5cb92bef7577960e$var$CONTEXT_UPDATE,
              handleUpdate
            ),
            () =>
              document.removeEventListener(
                $5cb92bef7577960e$var$CONTEXT_UPDATE,
                handleUpdate
              )
          )
        }, []),
        (0, import_react9.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
          _extends({}, layerProps, {
            ref: composedRefs,
            style: {
              pointerEvents: isBodyPointerEventsDisabled
                ? isPointerEventsEnabled
                  ? 'auto'
                  : 'none'
                : void 0,
              ...props.style,
            },
            onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              props.onFocusCapture,
              focusOutside.onFocusCapture
            ),
            onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              props.onBlurCapture,
              focusOutside.onBlurCapture
            ),
            onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              props.onPointerDownCapture,
              pointerDownOutside.onPointerDownCapture
            ),
          })
        )
      )
    }
  )
function $5cb92bef7577960e$var$usePointerDownOutside(
  onPointerDownOutside,
  ownerDocument = globalThis?.document
) {
  let handlePointerDownOutside =
      $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside),
    isPointerInsideReactTreeRef = (0, import_react9.useRef)(!1),
    handleClickRef = (0, import_react9.useRef)(() => {})
  return (
    (0, import_react9.useEffect)(() => {
      let handlePointerDown = (event) => {
          if (event.target && !isPointerInsideReactTreeRef.current) {
            let handleAndDispatchPointerDownOutsideEvent = function () {
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                  $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE,
                  handlePointerDownOutside,
                  eventDetail,
                  {discrete: !0}
                )
              },
              eventDetail = {originalEvent: event}
            event.pointerType === 'touch'
              ? (ownerDocument.removeEventListener(
                  'click',
                  handleClickRef.current
                ),
                (handleClickRef.current =
                  handleAndDispatchPointerDownOutsideEvent),
                ownerDocument.addEventListener(
                  'click',
                  handleClickRef.current,
                  {once: !0}
                ))
              : handleAndDispatchPointerDownOutsideEvent()
          }
          isPointerInsideReactTreeRef.current = !1
        },
        timerId = window.setTimeout(() => {
          ownerDocument.addEventListener('pointerdown', handlePointerDown)
        }, 0)
      return () => {
        window.clearTimeout(timerId),
          ownerDocument.removeEventListener('pointerdown', handlePointerDown),
          ownerDocument.removeEventListener('click', handleClickRef.current)
      }
    }, [ownerDocument, handlePointerDownOutside]),
    {onPointerDownCapture: () => (isPointerInsideReactTreeRef.current = !0)}
  )
}
function $5cb92bef7577960e$var$useFocusOutside(
  onFocusOutside,
  ownerDocument = globalThis?.document
) {
  let handleFocusOutside =
      $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside),
    isFocusInsideReactTreeRef = (0, import_react9.useRef)(!1)
  return (
    (0, import_react9.useEffect)(() => {
      let handleFocus = (event) => {
        event.target &&
          !isFocusInsideReactTreeRef.current &&
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
            $5cb92bef7577960e$var$FOCUS_OUTSIDE,
            handleFocusOutside,
            {originalEvent: event},
            {discrete: !1}
          )
      }
      return (
        ownerDocument.addEventListener('focusin', handleFocus),
        () => ownerDocument.removeEventListener('focusin', handleFocus)
      )
    }, [ownerDocument, handleFocusOutside]),
    {
      onFocusCapture: () => (isFocusInsideReactTreeRef.current = !0),
      onBlurCapture: () => (isFocusInsideReactTreeRef.current = !1),
    }
  )
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  let event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE)
  document.dispatchEvent(event)
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
  name,
  handler,
  detail,
  {discrete}
) {
  let target = detail.originalEvent.target,
    event = new CustomEvent(name, {bubbles: !1, cancelable: !0, detail})
  handler && target.addEventListener(name, handler, {once: !0}),
    discrete
      ? $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event)
      : target.dispatchEvent(event)
}
var import_react10 = __toESM(require_react(), 1),
  $3db38b7d1fb3fe6a$var$count = 0
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  ;(0, import_react10.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2
    let edgeGuards = document.querySelectorAll('[data-radix-focus-guard]')
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0
          ? _edgeGuards$
          : $3db38b7d1fb3fe6a$var$createFocusGuard()
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0
          ? _edgeGuards$2
          : $3db38b7d1fb3fe6a$var$createFocusGuard()
      ),
      $3db38b7d1fb3fe6a$var$count++,
      () => {
        $3db38b7d1fb3fe6a$var$count === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((node) => node.remove()),
          $3db38b7d1fb3fe6a$var$count--
      }
    )
  }, [])
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  let element = document.createElement('span')
  return (
    element.setAttribute('data-radix-focus-guard', ''),
    (element.tabIndex = 0),
    (element.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    element
  )
}
var import_react11 = __toESM(require_react(), 1)
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount',
  $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount',
  $d3863c46a17e8a28$var$EVENT_OPTIONS = {bubbles: !1, cancelable: !0}
var $d3863c46a17e8a28$export$20e40289641fbbb6 = (0, import_react11.forwardRef)(
  (props, forwardedRef) => {
    let {
        loop = !1,
        trapped = !1,
        onMountAutoFocus: onMountAutoFocusProp,
        onUnmountAutoFocus: onUnmountAutoFocusProp,
        ...scopeProps
      } = props,
      [container1, setContainer] = (0, import_react11.useState)(null),
      onMountAutoFocus =
        $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp),
      onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(
        onUnmountAutoFocusProp
      ),
      lastFocusedElementRef = (0, import_react11.useRef)(null),
      composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setContainer(node)
      ),
      focusScope = (0, import_react11.useRef)({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        },
      }).current
    ;(0, import_react11.useEffect)(() => {
      if (trapped) {
        let handleFocusIn = function (event) {
            if (focusScope.paused || !container1) return
            let target = event.target
            container1.contains(target)
              ? (lastFocusedElementRef.current = target)
              : $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                  select: !0,
                })
          },
          handleFocusOut = function (event) {
            if (focusScope.paused || !container1) return
            let relatedTarget = event.relatedTarget
            relatedTarget !== null &&
              (container1.contains(relatedTarget) ||
                $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                  select: !0,
                }))
          },
          handleMutations = function (mutations) {
            let focusedElement = document.activeElement
            for (let mutation of mutations)
              mutation.removedNodes.length > 0 &&
                ((container1 != null && container1.contains(focusedElement)) ||
                  $d3863c46a17e8a28$var$focus(container1))
          }
        document.addEventListener('focusin', handleFocusIn),
          document.addEventListener('focusout', handleFocusOut)
        let mutationObserver = new MutationObserver(handleMutations)
        return (
          container1 &&
            mutationObserver.observe(container1, {childList: !0, subtree: !0}),
          () => {
            document.removeEventListener('focusin', handleFocusIn),
              document.removeEventListener('focusout', handleFocusOut),
              mutationObserver.disconnect()
          }
        )
      }
    }, [trapped, container1, focusScope.paused]),
      (0, import_react11.useEffect)(() => {
        if (container1) {
          $d3863c46a17e8a28$var$focusScopesStack.add(focusScope)
          let previouslyFocusedElement = document.activeElement
          if (!container1.contains(previouslyFocusedElement)) {
            let mountEvent = new CustomEvent(
              $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT,
              $d3863c46a17e8a28$var$EVENT_OPTIONS
            )
            container1.addEventListener(
              $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT,
              onMountAutoFocus
            ),
              container1.dispatchEvent(mountEvent),
              mountEvent.defaultPrevented ||
                ($d3863c46a17e8a28$var$focusFirst(
                  $d3863c46a17e8a28$var$removeLinks(
                    $d3863c46a17e8a28$var$getTabbableCandidates(container1)
                  ),
                  {select: !0}
                ),
                document.activeElement === previouslyFocusedElement &&
                  $d3863c46a17e8a28$var$focus(container1))
          }
          return () => {
            container1.removeEventListener(
              $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT,
              onMountAutoFocus
            ),
              setTimeout(() => {
                let unmountEvent = new CustomEvent(
                  $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT,
                  $d3863c46a17e8a28$var$EVENT_OPTIONS
                )
                container1.addEventListener(
                  $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT,
                  onUnmountAutoFocus
                ),
                  container1.dispatchEvent(unmountEvent),
                  unmountEvent.defaultPrevented ||
                    $d3863c46a17e8a28$var$focus(
                      previouslyFocusedElement ?? document.body,
                      {select: !0}
                    ),
                  container1.removeEventListener(
                    $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT,
                    onUnmountAutoFocus
                  ),
                  $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope)
              }, 0)
          }
        }
      }, [container1, onMountAutoFocus, onUnmountAutoFocus, focusScope])
    let handleKeyDown = (0, import_react11.useCallback)(
      (event) => {
        if ((!loop && !trapped) || focusScope.paused) return
        let isTabKey =
            event.key === 'Tab' &&
            !event.altKey &&
            !event.ctrlKey &&
            !event.metaKey,
          focusedElement = document.activeElement
        if (isTabKey && focusedElement) {
          let container = event.currentTarget,
            [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container)
          first && last
            ? !event.shiftKey && focusedElement === last
              ? (event.preventDefault(),
                loop && $d3863c46a17e8a28$var$focus(first, {select: !0}))
              : event.shiftKey &&
                focusedElement === first &&
                (event.preventDefault(),
                loop && $d3863c46a17e8a28$var$focus(last, {select: !0}))
            : focusedElement === container && event.preventDefault()
        }
      },
      [loop, trapped, focusScope.paused]
    )
    return (0, import_react11.createElement)(
      $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
      _extends({tabIndex: -1}, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown,
      })
    )
  }
)
function $d3863c46a17e8a28$var$focusFirst(candidates, {select = !1} = {}) {
  let previouslyFocusedElement = document.activeElement
  for (let candidate of candidates)
    if (
      ($d3863c46a17e8a28$var$focus(candidate, {select}),
      document.activeElement !== previouslyFocusedElement)
    )
      return
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  let candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container),
    first = $d3863c46a17e8a28$var$findVisible(candidates, container),
    last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container)
  return [first, last]
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  let nodes = [],
    walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        let isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden'
        return node.disabled || node.hidden || isHiddenInput
          ? NodeFilter.FILTER_SKIP
          : node.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP
      },
    })
  for (; walker.nextNode(); ) nodes.push(walker.currentNode)
  return nodes
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (let element of elements)
    if (!$d3863c46a17e8a28$var$isHidden(element, {upTo: container}))
      return element
}
function $d3863c46a17e8a28$var$isHidden(node, {upTo}) {
  if (getComputedStyle(node).visibility === 'hidden') return !0
  for (; node; ) {
    if (upTo !== void 0 && node === upTo) return !1
    if (getComputedStyle(node).display === 'none') return !0
    node = node.parentElement
  }
  return !1
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && 'select' in element
}
function $d3863c46a17e8a28$var$focus(element, {select = !1} = {}) {
  if (element && element.focus) {
    let previouslyFocusedElement = document.activeElement
    element.focus({preventScroll: !0}),
      element !== previouslyFocusedElement &&
        $d3863c46a17e8a28$var$isSelectableInput(element) &&
        select &&
        element.select()
  }
}
var $d3863c46a17e8a28$var$focusScopesStack =
  $d3863c46a17e8a28$var$createFocusScopesStack()
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = []
  return {
    add(focusScope) {
      let activeFocusScope = stack[0]
      focusScope !== activeFocusScope && activeFocusScope?.pause(),
        (stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope)),
        stack.unshift(focusScope)
    },
    remove(focusScope) {
      var _stack$
      ;(stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope)),
        (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume()
    },
  }
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  let updatedArray = [...array],
    index2 = updatedArray.indexOf(item)
  return index2 !== -1 && updatedArray.splice(index2, 1), updatedArray
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter((item) => item.tagName !== 'A')
}
var $2AODx$react = __toESM(require_react(), 1)
var import_react12 = __toESM(require_react(), 1),
  $9f79659886946c16$export$e5c5a5f917a5871c = globalThis?.document
    ? import_react12.useLayoutEffect
    : () => {}
var $1746a345f3d73bb7$var$useReactId =
    $2AODx$react['useId'.toString()] || (() => {}),
  $1746a345f3d73bb7$var$count = 0
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  let [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId())
  return (
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      deterministicId ||
        setId((reactId) => reactId ?? String($1746a345f3d73bb7$var$count++))
    }, [deterministicId]),
    deterministicId || (id ? `radix-${id}` : '')
  )
}
var import_react15 = __toESM(require_react(), 1)
function t(t2) {
  return t2.split('-')[1]
}
function e(t2) {
  return t2 === 'y' ? 'height' : 'width'
}
function n(t2) {
  return t2.split('-')[0]
}
function o(t2) {
  return ['top', 'bottom'].includes(n(t2)) ? 'x' : 'y'
}
function i(i3, r3, a3) {
  let {reference: l3, floating: s3} = i3,
    c3 = l3.x + l3.width / 2 - s3.width / 2,
    f3 = l3.y + l3.height / 2 - s3.height / 2,
    m3 = o(r3),
    u3 = e(m3),
    g3 = l3[u3] / 2 - s3[u3] / 2,
    d3 = m3 === 'x',
    p3
  switch (n(r3)) {
    case 'top':
      p3 = {x: c3, y: l3.y - s3.height}
      break
    case 'bottom':
      p3 = {x: c3, y: l3.y + l3.height}
      break
    case 'right':
      p3 = {x: l3.x + l3.width, y: f3}
      break
    case 'left':
      p3 = {x: l3.x - s3.width, y: f3}
      break
    default:
      p3 = {x: l3.x, y: l3.y}
  }
  switch (t(r3)) {
    case 'start':
      p3[m3] -= g3 * (a3 && d3 ? -1 : 1)
      break
    case 'end':
      p3[m3] += g3 * (a3 && d3 ? -1 : 1)
  }
  return p3
}
var r = async (t2, e2, n3) => {
  let {
      placement: o3 = 'bottom',
      strategy: r3 = 'absolute',
      middleware: a3 = [],
      platform: l3,
    } = n3,
    s3 = a3.filter(Boolean),
    c3 = await (l3.isRTL == null ? void 0 : l3.isRTL(e2)),
    f3 = await l3.getElementRects({reference: t2, floating: e2, strategy: r3}),
    {x: m3, y: u3} = i(f3, o3, c3),
    g3 = o3,
    d3 = {},
    p3 = 0
  for (let n4 = 0; n4 < s3.length; n4++) {
    let {name: a4, fn: h3} = s3[n4],
      {
        x: y3,
        y: x3,
        data: w3,
        reset: v3,
      } = await h3({
        x: m3,
        y: u3,
        initialPlacement: o3,
        placement: g3,
        strategy: r3,
        middlewareData: d3,
        rects: f3,
        platform: l3,
        elements: {reference: t2, floating: e2},
      })
    ;(m3 = y3 ?? m3),
      (u3 = x3 ?? u3),
      (d3 = {...d3, [a4]: {...d3[a4], ...w3}}),
      v3 &&
        p3 <= 50 &&
        (p3++,
        typeof v3 == 'object' &&
          (v3.placement && (g3 = v3.placement),
          v3.rects &&
            (f3 =
              v3.rects === !0
                ? await l3.getElementRects({
                    reference: t2,
                    floating: e2,
                    strategy: r3,
                  })
                : v3.rects),
          ({x: m3, y: u3} = i(f3, g3, c3))),
        (n4 = -1))
  }
  return {x: m3, y: u3, placement: g3, strategy: r3, middlewareData: d3}
}
function a(t2, e2) {
  return typeof t2 == 'function' ? t2(e2) : t2
}
function l(t2) {
  return typeof t2 != 'number'
    ? (function (t3) {
        return {top: 0, right: 0, bottom: 0, left: 0, ...t3}
      })(t2)
    : {top: t2, right: t2, bottom: t2, left: t2}
}
function s(t2) {
  return {
    ...t2,
    top: t2.y,
    left: t2.x,
    right: t2.x + t2.width,
    bottom: t2.y + t2.height,
  }
}
async function c(t2, e2) {
  var n3
  e2 === void 0 && (e2 = {})
  let {x: o3, y: i3, platform: r3, rects: c3, elements: f3, strategy: m3} = t2,
    {
      boundary: u3 = 'clippingAncestors',
      rootBoundary: g3 = 'viewport',
      elementContext: d3 = 'floating',
      altBoundary: p3 = !1,
      padding: h3 = 0,
    } = a(e2, t2),
    y3 = l(h3),
    x3 = f3[p3 ? (d3 === 'floating' ? 'reference' : 'floating') : d3],
    w3 = s(
      await r3.getClippingRect({
        element:
          (n3 = await (r3.isElement == null ? void 0 : r3.isElement(x3))) ==
            null || n3
            ? x3
            : x3.contextElement ||
              (await (r3.getDocumentElement == null
                ? void 0
                : r3.getDocumentElement(f3.floating))),
        boundary: u3,
        rootBoundary: g3,
        strategy: m3,
      })
    ),
    v3 = d3 === 'floating' ? {...c3.floating, x: o3, y: i3} : c3.reference,
    b3 = await (r3.getOffsetParent == null
      ? void 0
      : r3.getOffsetParent(f3.floating)),
    A3 = ((await (r3.isElement == null ? void 0 : r3.isElement(b3))) &&
      (await (r3.getScale == null ? void 0 : r3.getScale(b3)))) || {x: 1, y: 1},
    R3 = s(
      r3.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r3.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: v3,
            offsetParent: b3,
            strategy: m3,
          })
        : v3
    )
  return {
    top: (w3.top - R3.top + y3.top) / A3.y,
    bottom: (R3.bottom - w3.bottom + y3.bottom) / A3.y,
    left: (w3.left - R3.left + y3.left) / A3.x,
    right: (R3.right - w3.right + y3.right) / A3.x,
  }
}
var f = Math.min,
  m = Math.max
function u(t2, e2, n3) {
  return m(t2, f(e2, n3))
}
var g = (n3) => ({
    name: 'arrow',
    options: n3,
    async fn(i3) {
      let {
          x: r3,
          y: s3,
          placement: c3,
          rects: m3,
          platform: g3,
          elements: d3,
        } = i3,
        {element: p3, padding: h3 = 0} = a(n3, i3) || {}
      if (p3 == null) return {}
      let y3 = l(h3),
        x3 = {x: r3, y: s3},
        w3 = o(c3),
        v3 = e(w3),
        b3 = await g3.getDimensions(p3),
        A3 = w3 === 'y',
        R3 = A3 ? 'top' : 'left',
        P3 = A3 ? 'bottom' : 'right',
        E3 = A3 ? 'clientHeight' : 'clientWidth',
        T2 = m3.reference[v3] + m3.reference[w3] - x3[w3] - m3.floating[v3],
        D3 = x3[w3] - m3.reference[w3],
        L3 = await (g3.getOffsetParent == null
          ? void 0
          : g3.getOffsetParent(p3)),
        k2 = L3 ? L3[E3] : 0
      ;(k2 && (await (g3.isElement == null ? void 0 : g3.isElement(L3)))) ||
        (k2 = d3.floating[E3] || m3.floating[v3])
      let O3 = T2 / 2 - D3 / 2,
        B3 = k2 / 2 - b3[v3] / 2 - 1,
        C3 = f(y3[R3], B3),
        H2 = f(y3[P3], B3),
        S2 = C3,
        F2 = k2 - b3[v3] - H2,
        M2 = k2 / 2 - b3[v3] / 2 + O3,
        V2 = u(S2, M2, F2),
        W2 =
          t(c3) != null &&
          M2 != V2 &&
          m3.reference[v3] / 2 - (M2 < S2 ? C3 : H2) - b3[v3] / 2 < 0
            ? M2 < S2
              ? S2 - M2
              : F2 - M2
            : 0
      return {[w3]: x3[w3] - W2, data: {[w3]: V2, centerOffset: M2 - V2 + W2}}
    },
  }),
  d = ['top', 'right', 'bottom', 'left'],
  p = d.reduce((t2, e2) => t2.concat(e2, e2 + '-start', e2 + '-end'), []),
  h = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'}
function y(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => h[t3])
}
function x(n3, i3, r3) {
  r3 === void 0 && (r3 = !1)
  let a3 = t(n3),
    l3 = o(n3),
    s3 = e(l3),
    c3 =
      l3 === 'x'
        ? a3 === (r3 ? 'end' : 'start')
          ? 'right'
          : 'left'
        : a3 === 'start'
        ? 'bottom'
        : 'top'
  return (
    i3.reference[s3] > i3.floating[s3] && (c3 = y(c3)), {main: c3, cross: y(c3)}
  )
}
var w = {start: 'end', end: 'start'}
function v(t2) {
  return t2.replace(/start|end/g, (t3) => w[t3])
}
var A = function (e2) {
  return (
    e2 === void 0 && (e2 = {}),
    {
      name: 'flip',
      options: e2,
      async fn(o3) {
        var i3
        let {
            placement: r3,
            middlewareData: l3,
            rects: s3,
            initialPlacement: f3,
            platform: m3,
            elements: u3,
          } = o3,
          {
            mainAxis: g3 = !0,
            crossAxis: d3 = !0,
            fallbackPlacements: p3,
            fallbackStrategy: h3 = 'bestFit',
            fallbackAxisSideDirection: w3 = 'none',
            flipAlignment: b3 = !0,
            ...A3
          } = a(e2, o3),
          R3 = n(r3),
          P3 = n(f3) === f3,
          E3 = await (m3.isRTL == null ? void 0 : m3.isRTL(u3.floating)),
          T2 =
            p3 ||
            (P3 || !b3
              ? [y(f3)]
              : (function (t2) {
                  let e3 = y(t2)
                  return [v(t2), e3, v(e3)]
                })(f3))
        p3 ||
          w3 === 'none' ||
          T2.push(
            ...(function (e3, o4, i4, r4) {
              let a3 = t(e3),
                l4 = (function (t2, e4, n3) {
                  let o5 = ['left', 'right'],
                    i5 = ['right', 'left'],
                    r5 = ['top', 'bottom'],
                    a4 = ['bottom', 'top']
                  switch (t2) {
                    case 'top':
                    case 'bottom':
                      return n3 ? (e4 ? i5 : o5) : e4 ? o5 : i5
                    case 'left':
                    case 'right':
                      return e4 ? r5 : a4
                    default:
                      return []
                  }
                })(n(e3), i4 === 'start', r4)
              return (
                a3 &&
                  ((l4 = l4.map((t2) => t2 + '-' + a3)),
                  o4 && (l4 = l4.concat(l4.map(v)))),
                l4
              )
            })(f3, b3, w3, E3)
          )
        let D3 = [f3, ...T2],
          L3 = await c(o3, A3),
          k2 = [],
          O3 = ((i3 = l3.flip) == null ? void 0 : i3.overflows) || []
        if ((g3 && k2.push(L3[R3]), d3)) {
          let {main: t2, cross: e3} = x(r3, s3, E3)
          k2.push(L3[t2], L3[e3])
        }
        if (
          ((O3 = [...O3, {placement: r3, overflows: k2}]),
          !k2.every((t2) => t2 <= 0))
        ) {
          var B3, C3
          let t2 = (((B3 = l3.flip) == null ? void 0 : B3.index) || 0) + 1,
            e3 = D3[t2]
          if (e3)
            return {data: {index: t2, overflows: O3}, reset: {placement: e3}}
          let n3 =
            (C3 = O3.filter((t3) => t3.overflows[0] <= 0).sort(
              (t3, e4) => t3.overflows[1] - e4.overflows[1]
            )[0]) == null
              ? void 0
              : C3.placement
          if (!n3)
            switch (h3) {
              case 'bestFit': {
                var H2
                let t3 =
                  (H2 = O3.map((t4) => [
                    t4.placement,
                    t4.overflows
                      .filter((t5) => t5 > 0)
                      .reduce((t5, e4) => t5 + e4, 0),
                  ]).sort((t4, e4) => t4[1] - e4[1])[0]) == null
                    ? void 0
                    : H2[0]
                t3 && (n3 = t3)
                break
              }
              case 'initialPlacement':
                n3 = f3
            }
          if (r3 !== n3) return {reset: {placement: n3}}
        }
        return {}
      },
    }
  )
}
function R(t2, e2) {
  return {
    top: t2.top - e2.height,
    right: t2.right - e2.width,
    bottom: t2.bottom - e2.height,
    left: t2.left - e2.width,
  }
}
function P(t2) {
  return d.some((e2) => t2[e2] >= 0)
}
var E = function (t2) {
  return (
    t2 === void 0 && (t2 = {}),
    {
      name: 'hide',
      options: t2,
      async fn(e2) {
        let {rects: n3} = e2,
          {strategy: o3 = 'referenceHidden', ...i3} = a(t2, e2)
        switch (o3) {
          case 'referenceHidden': {
            let t3 = R(
              await c(e2, {...i3, elementContext: 'reference'}),
              n3.reference
            )
            return {data: {referenceHiddenOffsets: t3, referenceHidden: P(t3)}}
          }
          case 'escaped': {
            let t3 = R(await c(e2, {...i3, altBoundary: !0}), n3.floating)
            return {data: {escapedOffsets: t3, escaped: P(t3)}}
          }
          default:
            return {}
        }
      },
    }
  )
}
var L = function (e2) {
  return (
    e2 === void 0 && (e2 = 0),
    {
      name: 'offset',
      options: e2,
      async fn(i3) {
        let {x: r3, y: l3} = i3,
          s3 = await (async function (e3, i4) {
            let {placement: r4, platform: l4, elements: s4} = e3,
              c3 = await (l4.isRTL == null ? void 0 : l4.isRTL(s4.floating)),
              f3 = n(r4),
              m3 = t(r4),
              u3 = o(r4) === 'x',
              g3 = ['left', 'top'].includes(f3) ? -1 : 1,
              d3 = c3 && u3 ? -1 : 1,
              p3 = a(i4, e3),
              {
                mainAxis: h3,
                crossAxis: y3,
                alignmentAxis: x3,
              } = typeof p3 == 'number'
                ? {mainAxis: p3, crossAxis: 0, alignmentAxis: null}
                : {mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p3}
            return (
              m3 && typeof x3 == 'number' && (y3 = m3 === 'end' ? -1 * x3 : x3),
              u3 ? {x: y3 * d3, y: h3 * g3} : {x: h3 * g3, y: y3 * d3}
            )
          })(i3, e2)
        return {x: r3 + s3.x, y: l3 + s3.y, data: s3}
      },
    }
  )
}
function k(t2) {
  return t2 === 'x' ? 'y' : 'x'
}
var O = function (t2) {
    return (
      t2 === void 0 && (t2 = {}),
      {
        name: 'shift',
        options: t2,
        async fn(e2) {
          let {x: i3, y: r3, placement: l3} = e2,
            {
              mainAxis: s3 = !0,
              crossAxis: f3 = !1,
              limiter: m3 = {
                fn: (t3) => {
                  let {x: e3, y: n3} = t3
                  return {x: e3, y: n3}
                },
              },
              ...g3
            } = a(t2, e2),
            d3 = {x: i3, y: r3},
            p3 = await c(e2, g3),
            h3 = o(n(l3)),
            y3 = k(h3),
            x3 = d3[h3],
            w3 = d3[y3]
          if (s3) {
            let t3 = h3 === 'y' ? 'bottom' : 'right'
            x3 = u(x3 + p3[h3 === 'y' ? 'top' : 'left'], x3, x3 - p3[t3])
          }
          if (f3) {
            let t3 = y3 === 'y' ? 'bottom' : 'right'
            w3 = u(w3 + p3[y3 === 'y' ? 'top' : 'left'], w3, w3 - p3[t3])
          }
          let v3 = m3.fn({...e2, [h3]: x3, [y3]: w3})
          return {...v3, data: {x: v3.x - i3, y: v3.y - r3}}
        },
      }
    )
  },
  B = function (t2) {
    return (
      t2 === void 0 && (t2 = {}),
      {
        options: t2,
        fn(e2) {
          let {x: i3, y: r3, placement: l3, rects: s3, middlewareData: c3} = e2,
            {offset: f3 = 0, mainAxis: m3 = !0, crossAxis: u3 = !0} = a(t2, e2),
            g3 = {x: i3, y: r3},
            d3 = o(l3),
            p3 = k(d3),
            h3 = g3[d3],
            y3 = g3[p3],
            x3 = a(f3, e2),
            w3 =
              typeof x3 == 'number'
                ? {mainAxis: x3, crossAxis: 0}
                : {mainAxis: 0, crossAxis: 0, ...x3}
          if (m3) {
            let t3 = d3 === 'y' ? 'height' : 'width',
              e3 = s3.reference[d3] - s3.floating[t3] + w3.mainAxis,
              n3 = s3.reference[d3] + s3.reference[t3] - w3.mainAxis
            h3 < e3 ? (h3 = e3) : h3 > n3 && (h3 = n3)
          }
          if (u3) {
            var v3, b3
            let t3 = d3 === 'y' ? 'width' : 'height',
              e3 = ['top', 'left'].includes(n(l3)),
              o3 =
                s3.reference[p3] -
                s3.floating[t3] +
                ((e3 && ((v3 = c3.offset) == null ? void 0 : v3[p3])) || 0) +
                (e3 ? 0 : w3.crossAxis),
              i4 =
                s3.reference[p3] +
                s3.reference[t3] +
                (e3 ? 0 : ((b3 = c3.offset) == null ? void 0 : b3[p3]) || 0) -
                (e3 ? w3.crossAxis : 0)
            y3 < o3 ? (y3 = o3) : y3 > i4 && (y3 = i4)
          }
          return {[d3]: h3, [p3]: y3}
        },
      }
    )
  },
  C = function (e2) {
    return (
      e2 === void 0 && (e2 = {}),
      {
        name: 'size',
        options: e2,
        async fn(i3) {
          let {placement: r3, rects: l3, platform: s3, elements: u3} = i3,
            {apply: g3 = () => {}, ...d3} = a(e2, i3),
            p3 = await c(i3, d3),
            h3 = n(r3),
            y3 = t(r3),
            x3 = o(r3) === 'x',
            {width: w3, height: v3} = l3.floating,
            b3,
            A3
          h3 === 'top' || h3 === 'bottom'
            ? ((b3 = h3),
              (A3 =
                y3 ===
                ((await (s3.isRTL == null ? void 0 : s3.isRTL(u3.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((A3 = h3), (b3 = y3 === 'end' ? 'top' : 'bottom'))
          let R3 = v3 - p3[b3],
            P3 = w3 - p3[A3],
            E3 = !i3.middlewareData.shift,
            T2 = R3,
            D3 = P3
          if (x3) {
            let t2 = w3 - p3.left - p3.right
            D3 = y3 || E3 ? f(P3, t2) : t2
          } else {
            let t2 = v3 - p3.top - p3.bottom
            T2 = y3 || E3 ? f(R3, t2) : t2
          }
          if (E3 && !y3) {
            let t2 = m(p3.left, 0),
              e3 = m(p3.right, 0),
              n3 = m(p3.top, 0),
              o3 = m(p3.bottom, 0)
            x3
              ? (D3 =
                  w3 -
                  2 * (t2 !== 0 || e3 !== 0 ? t2 + e3 : m(p3.left, p3.right)))
              : (T2 =
                  v3 -
                  2 * (n3 !== 0 || o3 !== 0 ? n3 + o3 : m(p3.top, p3.bottom)))
          }
          await g3({...i3, availableWidth: D3, availableHeight: T2})
          let L3 = await s3.getDimensions(u3.floating)
          return w3 !== L3.width || v3 !== L3.height ? {reset: {rects: !0}} : {}
        },
      }
    )
  }
function n2(t2) {
  var e2
  return (
    (t2 == null || (e2 = t2.ownerDocument) == null ? void 0 : e2.defaultView) ||
    window
  )
}
function o2(t2) {
  return n2(t2).getComputedStyle(t2)
}
function i2(t2) {
  return t2 instanceof n2(t2).Node
}
function r2(t2) {
  return i2(t2) ? (t2.nodeName || '').toLowerCase() : '#document'
}
function c2(t2) {
  return t2 instanceof HTMLElement || t2 instanceof n2(t2).HTMLElement
}
function l2(t2) {
  return (
    typeof ShadowRoot < 'u' &&
    (t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot)
  )
}
function s2(t2) {
  let {overflow: e2, overflowX: n3, overflowY: i3, display: r3} = o2(t2)
  return (
    /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) &&
    !['inline', 'contents'].includes(r3)
  )
}
function f2(t2) {
  return ['table', 'td', 'th'].includes(r2(t2))
}
function u2(t2) {
  let e2 = a2(),
    n3 = o2(t2)
  return (
    n3.transform !== 'none' ||
    n3.perspective !== 'none' ||
    (!!n3.containerType && n3.containerType !== 'normal') ||
    (!e2 && !!n3.backdropFilter && n3.backdropFilter !== 'none') ||
    (!e2 && !!n3.filter && n3.filter !== 'none') ||
    ['transform', 'perspective', 'filter'].some((t3) =>
      (n3.willChange || '').includes(t3)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((t3) =>
      (n3.contain || '').includes(t3)
    )
  )
}
function a2() {
  return (
    !(typeof CSS > 'u' || !CSS.supports) &&
    CSS.supports('-webkit-backdrop-filter', 'none')
  )
}
function d2(t2) {
  return ['html', 'body', '#document'].includes(r2(t2))
}
var h2 = Math.min,
  p2 = Math.max,
  m2 = Math.round,
  g2 = Math.floor,
  y2 = (t2) => ({x: t2, y: t2})
function w2(t2) {
  let e2 = o2(t2),
    n3 = parseFloat(e2.width) || 0,
    i3 = parseFloat(e2.height) || 0,
    r3 = c2(t2),
    l3 = r3 ? t2.offsetWidth : n3,
    s3 = r3 ? t2.offsetHeight : i3,
    f3 = m2(n3) !== l3 || m2(i3) !== s3
  return f3 && ((n3 = l3), (i3 = s3)), {width: n3, height: i3, $: f3}
}
function x2(t2) {
  return t2 instanceof Element || t2 instanceof n2(t2).Element
}
function v2(t2) {
  return x2(t2) ? t2 : t2.contextElement
}
function b2(t2) {
  let e2 = v2(t2)
  if (!c2(e2)) return y2(1)
  let n3 = e2.getBoundingClientRect(),
    {width: o3, height: i3, $: r3} = w2(e2),
    l3 = (r3 ? m2(n3.width) : n3.width) / o3,
    s3 = (r3 ? m2(n3.height) : n3.height) / i3
  return (
    (l3 && Number.isFinite(l3)) || (l3 = 1),
    (s3 && Number.isFinite(s3)) || (s3 = 1),
    {x: l3, y: s3}
  )
}
var L2 = y2(0)
function T(t2) {
  let e2 = n2(t2)
  return a2() && e2.visualViewport
    ? {x: e2.visualViewport.offsetLeft, y: e2.visualViewport.offsetTop}
    : L2
}
function R2(e2, o3, i3, r3) {
  o3 === void 0 && (o3 = !1), i3 === void 0 && (i3 = !1)
  let c3 = e2.getBoundingClientRect(),
    l3 = v2(e2),
    s3 = y2(1)
  o3 && (r3 ? x2(r3) && (s3 = b2(r3)) : (s3 = b2(e2)))
  let f3 = (function (t2, e3, o4) {
      return e3 === void 0 && (e3 = !1), !(!o4 || (e3 && o4 !== n2(t2))) && e3
    })(l3, i3, r3)
      ? T(l3)
      : y2(0),
    u3 = (c3.left + f3.x) / s3.x,
    a3 = (c3.top + f3.y) / s3.y,
    d3 = c3.width / s3.x,
    h3 = c3.height / s3.y
  if (l3) {
    let t2 = n2(l3),
      e3 = r3 && x2(r3) ? n2(r3) : r3,
      o4 = t2.frameElement
    for (; o4 && r3 && e3 !== t2; ) {
      let t3 = b2(o4),
        e4 = o4.getBoundingClientRect(),
        i4 = getComputedStyle(o4),
        r4 = e4.left + (o4.clientLeft + parseFloat(i4.paddingLeft)) * t3.x,
        c4 = e4.top + (o4.clientTop + parseFloat(i4.paddingTop)) * t3.y
      ;(u3 *= t3.x),
        (a3 *= t3.y),
        (d3 *= t3.x),
        (h3 *= t3.y),
        (u3 += r4),
        (a3 += c4),
        (o4 = n2(o4).frameElement)
    }
  }
  return s({width: d3, height: h3, x: u3, y: a3})
}
function E2(t2) {
  return x2(t2)
    ? {scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop}
    : {scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset}
}
function S(t2) {
  var e2
  return (e2 = (i2(t2) ? t2.ownerDocument : t2.document) || window.document) ==
    null
    ? void 0
    : e2.documentElement
}
function C2(t2) {
  return R2(S(t2)).left + E2(t2).scrollLeft
}
function F(t2) {
  if (r2(t2) === 'html') return t2
  let e2 = t2.assignedSlot || t2.parentNode || (l2(t2) && t2.host) || S(t2)
  return l2(e2) ? e2.host : e2
}
function O2(t2) {
  let e2 = F(t2)
  return d2(e2)
    ? t2.ownerDocument
      ? t2.ownerDocument.body
      : t2.body
    : c2(e2) && s2(e2)
    ? e2
    : O2(e2)
}
function D2(t2, e2) {
  var o3
  e2 === void 0 && (e2 = [])
  let i3 = O2(t2),
    r3 = i3 === ((o3 = t2.ownerDocument) == null ? void 0 : o3.body),
    c3 = n2(i3)
  return r3
    ? e2.concat(c3, c3.visualViewport || [], s2(i3) ? i3 : [])
    : e2.concat(i3, D2(i3))
}
function H(e2, i3, r3) {
  let l3
  if (i3 === 'viewport')
    l3 = (function (t2, e3) {
      let o3 = n2(t2),
        i4 = S(t2),
        r4 = o3.visualViewport,
        c3 = i4.clientWidth,
        l4 = i4.clientHeight,
        s3 = 0,
        f3 = 0
      if (r4) {
        ;(c3 = r4.width), (l4 = r4.height)
        let t3 = a2()
        ;(!t3 || (t3 && e3 === 'fixed')) &&
          ((s3 = r4.offsetLeft), (f3 = r4.offsetTop))
      }
      return {width: c3, height: l4, x: s3, y: f3}
    })(e2, r3)
  else if (i3 === 'document')
    l3 = (function (t2) {
      let e3 = S(t2),
        n3 = E2(t2),
        i4 = t2.ownerDocument.body,
        r4 = p2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth),
        c3 = p2(
          e3.scrollHeight,
          e3.clientHeight,
          i4.scrollHeight,
          i4.clientHeight
        ),
        l4 = -n3.scrollLeft + C2(t2),
        s3 = -n3.scrollTop
      return (
        o2(i4).direction === 'rtl' &&
          (l4 += p2(e3.clientWidth, i4.clientWidth) - r4),
        {width: r4, height: c3, x: l4, y: s3}
      )
    })(S(e2))
  else if (x2(i3))
    l3 = (function (t2, e3) {
      let n3 = R2(t2, !0, e3 === 'fixed'),
        o3 = n3.top + t2.clientTop,
        i4 = n3.left + t2.clientLeft,
        r4 = c2(t2) ? b2(t2) : y2(1)
      return {
        width: t2.clientWidth * r4.x,
        height: t2.clientHeight * r4.y,
        x: i4 * r4.x,
        y: o3 * r4.y,
      }
    })(i3, r3)
  else {
    let t2 = T(e2)
    l3 = {...i3, x: i3.x - t2.x, y: i3.y - t2.y}
  }
  return s(l3)
}
function W(t2, e2) {
  let n3 = F(t2)
  return (
    !(n3 === e2 || !x2(n3) || d2(n3)) &&
    (o2(n3).position === 'fixed' || W(n3, e2))
  )
}
function M(t2, e2, n3) {
  let o3 = c2(e2),
    i3 = S(e2),
    l3 = n3 === 'fixed',
    f3 = R2(t2, !0, l3, e2),
    u3 = {scrollLeft: 0, scrollTop: 0},
    a3 = y2(0)
  if (o3 || (!o3 && !l3))
    if (((r2(e2) !== 'body' || s2(i3)) && (u3 = E2(e2)), c2(e2))) {
      let t3 = R2(e2, !0, l3, e2)
      ;(a3.x = t3.x + e2.clientLeft), (a3.y = t3.y + e2.clientTop)
    } else i3 && (a3.x = C2(i3))
  return {
    x: f3.left + u3.scrollLeft - a3.x,
    y: f3.top + u3.scrollTop - a3.y,
    width: f3.width,
    height: f3.height,
  }
}
function z(t2, e2) {
  return c2(t2) && o2(t2).position !== 'fixed'
    ? e2
      ? e2(t2)
      : t2.offsetParent
    : null
}
function P2(t2, e2) {
  let i3 = n2(t2)
  if (!c2(t2)) return i3
  let l3 = z(t2, e2)
  for (; l3 && f2(l3) && o2(l3).position === 'static'; ) l3 = z(l3, e2)
  return l3 &&
    (r2(l3) === 'html' ||
      (r2(l3) === 'body' && o2(l3).position === 'static' && !u2(l3)))
    ? i3
    : l3 ||
        (function (t3) {
          let e3 = F(t3)
          for (; c2(e3) && !d2(e3); ) {
            if (u2(e3)) return e3
            e3 = F(e3)
          }
          return null
        })(t2) ||
        i3
}
var V = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (t2) {
    let {rect: e2, offsetParent: n3, strategy: o3} = t2,
      i3 = c2(n3),
      l3 = S(n3)
    if (n3 === l3) return e2
    let f3 = {scrollLeft: 0, scrollTop: 0},
      u3 = y2(1),
      a3 = y2(0)
    if (
      (i3 || (!i3 && o3 !== 'fixed')) &&
      ((r2(n3) !== 'body' || s2(l3)) && (f3 = E2(n3)), c2(n3))
    ) {
      let t3 = R2(n3)
      ;(u3 = b2(n3)),
        (a3.x = t3.x + n3.clientLeft),
        (a3.y = t3.y + n3.clientTop)
    }
    return {
      width: e2.width * u3.x,
      height: e2.height * u3.y,
      x: e2.x * u3.x - f3.scrollLeft * u3.x + a3.x,
      y: e2.y * u3.y - f3.scrollTop * u3.y + a3.y,
    }
  },
  getDocumentElement: S,
  getClippingRect: function (t2) {
    let {element: e2, boundary: n3, rootBoundary: i3, strategy: c3} = t2,
      l3 = [
        ...(n3 === 'clippingAncestors'
          ? (function (t3, e3) {
              let n4 = e3.get(t3)
              if (n4) return n4
              let i4 = D2(t3).filter((t4) => x2(t4) && r2(t4) !== 'body'),
                c4 = null,
                l4 = o2(t3).position === 'fixed',
                f4 = l4 ? F(t3) : t3
              for (; x2(f4) && !d2(f4); ) {
                let e4 = o2(f4),
                  n5 = u2(f4)
                n5 || e4.position !== 'fixed' || (c4 = null),
                  (
                    l4
                      ? !n5 && !c4
                      : (!n5 &&
                          e4.position === 'static' &&
                          c4 &&
                          ['absolute', 'fixed'].includes(c4.position)) ||
                        (s2(f4) && !n5 && W(t3, f4))
                  )
                    ? (i4 = i4.filter((t4) => t4 !== f4))
                    : (c4 = e4),
                  (f4 = F(f4))
              }
              return e3.set(t3, i4), i4
            })(e2, this._c)
          : [].concat(n3)),
        i3,
      ],
      f3 = l3[0],
      a3 = l3.reduce((t3, n4) => {
        let o3 = H(e2, n4, c3)
        return (
          (t3.top = p2(o3.top, t3.top)),
          (t3.right = h2(o3.right, t3.right)),
          (t3.bottom = h2(o3.bottom, t3.bottom)),
          (t3.left = p2(o3.left, t3.left)),
          t3
        )
      }, H(e2, f3, c3))
    return {
      width: a3.right - a3.left,
      height: a3.bottom - a3.top,
      x: a3.left,
      y: a3.top,
    }
  },
  getOffsetParent: P2,
  getElementRects: async function (t2) {
    let {reference: e2, floating: n3, strategy: o3} = t2,
      i3 = this.getOffsetParent || P2,
      r3 = this.getDimensions
    return {
      reference: M(e2, await i3(n3), o3),
      floating: {x: 0, y: 0, ...(await r3(n3))},
    }
  },
  getClientRects: function (t2) {
    return Array.from(t2.getClientRects())
  },
  getDimensions: function (t2) {
    return w2(t2)
  },
  getScale: b2,
  isElement: x2,
  isRTL: function (t2) {
    return getComputedStyle(t2).direction === 'rtl'
  },
}
function A2(t2, e2, n3, o3) {
  o3 === void 0 && (o3 = {})
  let {
      ancestorScroll: i3 = !0,
      ancestorResize: r3 = !0,
      elementResize: c3 = typeof ResizeObserver == 'function',
      layoutShift: l3 = typeof IntersectionObserver == 'function',
      animationFrame: s3 = !1,
    } = o3,
    f3 = v2(t2),
    u3 = i3 || r3 ? [...(f3 ? D2(f3) : []), ...D2(e2)] : []
  u3.forEach((t3) => {
    i3 && t3.addEventListener('scroll', n3, {passive: !0}),
      r3 && t3.addEventListener('resize', n3)
  })
  let a3 =
      f3 && l3
        ? (function (t3, e3) {
            let n4,
              o4 = null,
              i4 = S(t3)
            function r4() {
              clearTimeout(n4), o4 && o4.disconnect(), (o4 = null)
            }
            return (
              (function c4(l4, s4) {
                l4 === void 0 && (l4 = !1), s4 === void 0 && (s4 = 1), r4()
                let {
                  left: f4,
                  top: u4,
                  width: a4,
                  height: d4,
                } = t3.getBoundingClientRect()
                if ((l4 || e3(), !a4 || !d4)) return
                let m4 = {
                    rootMargin:
                      -g2(u4) +
                      'px ' +
                      -g2(i4.clientWidth - (f4 + a4)) +
                      'px ' +
                      -g2(i4.clientHeight - (u4 + d4)) +
                      'px ' +
                      -g2(f4) +
                      'px',
                    threshold: p2(0, h2(1, s4)) || 1,
                  },
                  y4 = !0
                function w4(t4) {
                  let e4 = t4[0].intersectionRatio
                  if (e4 !== s4) {
                    if (!y4) return c4()
                    e4
                      ? c4(!1, e4)
                      : (n4 = setTimeout(() => {
                          c4(!1, 1e-7)
                        }, 100))
                  }
                  y4 = !1
                }
                try {
                  o4 = new IntersectionObserver(w4, {
                    ...m4,
                    root: i4.ownerDocument,
                  })
                } catch {
                  o4 = new IntersectionObserver(w4, m4)
                }
                o4.observe(t3)
              })(!0),
              r4
            )
          })(f3, n3)
        : null,
    d3,
    m3 = -1,
    y3 = null
  c3 &&
    ((y3 = new ResizeObserver((t3) => {
      let [o4] = t3
      o4 &&
        o4.target === f3 &&
        y3 &&
        (y3.unobserve(e2),
        cancelAnimationFrame(m3),
        (m3 = requestAnimationFrame(() => {
          y3 && y3.observe(e2)
        }))),
        n3()
    })),
    f3 && !s3 && y3.observe(f3),
    y3.observe(e2))
  let w3 = s3 ? R2(t2) : null
  return (
    s3 &&
      (function e3() {
        let o4 = R2(t2)
        !w3 ||
          (o4.x === w3.x &&
            o4.y === w3.y &&
            o4.width === w3.width &&
            o4.height === w3.height) ||
          n3(),
          (w3 = o4),
          (d3 = requestAnimationFrame(e3))
      })(),
    n3(),
    () => {
      u3.forEach((t3) => {
        i3 && t3.removeEventListener('scroll', n3),
          r3 && t3.removeEventListener('resize', n3)
      }),
        a3 && a3(),
        y3 && y3.disconnect(),
        (y3 = null),
        s3 && cancelAnimationFrame(d3)
    }
  )
}
var B2 = (t2, n3, o3) => {
  let i3 = new Map(),
    r3 = {platform: V, ...o3},
    c3 = {...r3.platform, _c: i3}
  return r(t2, n3, {...r3, platform: c3})
}
var React = __toESM(require_react()),
  import_react13 = __toESM(require_react()),
  ReactDOM = __toESM(require_react_dom()),
  arrow = (options) => {
    function isRef(value) {
      return {}.hasOwnProperty.call(value, 'current')
    }
    return {
      name: 'arrow',
      options,
      fn(state) {
        let {element, padding} =
          typeof options == 'function' ? options(state) : options
        return element && isRef(element)
          ? element.current != null
            ? g({element: element.current, padding}).fn(state)
            : {}
          : element
          ? g({element, padding}).fn(state)
          : {}
      },
    }
  },
  index =
    typeof document < 'u'
      ? import_react13.useLayoutEffect
      : import_react13.useEffect
function deepEqual(a3, b3) {
  if (a3 === b3) return !0
  if (typeof a3 != typeof b3) return !1
  if (typeof a3 == 'function' && a3.toString() === b3.toString()) return !0
  let length, i3, keys
  if (a3 && b3 && typeof a3 == 'object') {
    if (Array.isArray(a3)) {
      if (((length = a3.length), length != b3.length)) return !1
      for (i3 = length; i3-- !== 0; ) if (!deepEqual(a3[i3], b3[i3])) return !1
      return !0
    }
    if (
      ((keys = Object.keys(a3)),
      (length = keys.length),
      length !== Object.keys(b3).length)
    )
      return !1
    for (i3 = length; i3-- !== 0; )
      if (!{}.hasOwnProperty.call(b3, keys[i3])) return !1
    for (i3 = length; i3-- !== 0; ) {
      let key = keys[i3]
      if (!(key === '_owner' && a3.$$typeof) && !deepEqual(a3[key], b3[key]))
        return !1
    }
    return !0
  }
  return a3 !== a3 && b3 !== b3
}
function getDPR(element) {
  return typeof window > 'u'
    ? 1
    : (element.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function roundByDPR(element, value) {
  let dpr = getDPR(element)
  return Math.round(value * dpr) / dpr
}
function useLatestRef(value) {
  let ref = React.useRef(value)
  return (
    index(() => {
      ref.current = value
    }),
    ref
  )
}
function useFloating(options) {
  options === void 0 && (options = {})
  let {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform,
      elements: {reference: externalReference, floating: externalFloating} = {},
      transform = !0,
      whileElementsMounted,
      open,
    } = options,
    [data, setData] = React.useState({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: !1,
    }),
    [latestMiddleware, setLatestMiddleware] = React.useState(middleware)
  deepEqual(latestMiddleware, middleware) || setLatestMiddleware(middleware)
  let [_reference, _setReference] = React.useState(null),
    [_floating, _setFloating] = React.useState(null),
    setReference = React.useCallback(
      (node) => {
        node != referenceRef.current &&
          ((referenceRef.current = node), _setReference(node))
      },
      [_setReference]
    ),
    setFloating = React.useCallback(
      (node) => {
        node !== floatingRef.current &&
          ((floatingRef.current = node), _setFloating(node))
      },
      [_setFloating]
    ),
    referenceEl = externalReference || _reference,
    floatingEl = externalFloating || _floating,
    referenceRef = React.useRef(null),
    floatingRef = React.useRef(null),
    dataRef = React.useRef(data),
    whileElementsMountedRef = useLatestRef(whileElementsMounted),
    platformRef = useLatestRef(platform),
    update = React.useCallback(() => {
      if (!referenceRef.current || !floatingRef.current) return
      let config = {placement, strategy, middleware: latestMiddleware}
      platformRef.current && (config.platform = platformRef.current),
        B2(referenceRef.current, floatingRef.current, config).then((data2) => {
          let fullData = {...data2, isPositioned: !0}
          isMountedRef.current &&
            !deepEqual(dataRef.current, fullData) &&
            ((dataRef.current = fullData),
            ReactDOM.flushSync(() => {
              setData(fullData)
            }))
        })
    }, [latestMiddleware, placement, strategy, platformRef])
  index(() => {
    open === !1 &&
      dataRef.current.isPositioned &&
      ((dataRef.current.isPositioned = !1),
      setData((data2) => ({...data2, isPositioned: !1})))
  }, [open])
  let isMountedRef = React.useRef(!1)
  index(
    () => (
      (isMountedRef.current = !0),
      () => {
        isMountedRef.current = !1
      }
    ),
    []
  ),
    index(() => {
      if (
        (referenceEl && (referenceRef.current = referenceEl),
        floatingEl && (floatingRef.current = floatingEl),
        referenceEl && floatingEl)
      ) {
        if (whileElementsMountedRef.current)
          return whileElementsMountedRef.current(
            referenceEl,
            floatingEl,
            update
          )
        update()
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef])
  let refs = React.useMemo(
      () => ({
        reference: referenceRef,
        floating: floatingRef,
        setReference,
        setFloating,
      }),
      [setReference, setFloating]
    ),
    elements = React.useMemo(
      () => ({reference: referenceEl, floating: floatingEl}),
      [referenceEl, floatingEl]
    ),
    floatingStyles = React.useMemo(() => {
      let initialStyles = {position: strategy, left: 0, top: 0}
      if (!elements.floating) return initialStyles
      let x3 = roundByDPR(elements.floating, data.x),
        y3 = roundByDPR(elements.floating, data.y)
      return transform
        ? {
            ...initialStyles,
            transform: 'translate(' + x3 + 'px, ' + y3 + 'px)',
            ...(getDPR(elements.floating) >= 1.5 && {willChange: 'transform'}),
          }
        : {position: strategy, left: x3, top: y3}
    }, [strategy, transform, elements.floating, data.x, data.y])
  return React.useMemo(
    () => ({...data, update, refs, elements, floatingStyles}),
    [data, update, refs, elements, floatingStyles]
  )
}
var import_react14 = __toESM(require_react(), 1)
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  let [size, setSize] = (0, import_react14.useState)(void 0)
  return (
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (element) {
        setSize({width: element.offsetWidth, height: element.offsetHeight})
        let resizeObserver = new ResizeObserver((entries) => {
          if (!Array.isArray(entries) || !entries.length) return
          let entry = entries[0],
            width,
            height
          if ('borderBoxSize' in entry) {
            let borderSizeEntry = entry.borderBoxSize,
              borderSize = Array.isArray(borderSizeEntry)
                ? borderSizeEntry[0]
                : borderSizeEntry
            ;(width = borderSize.inlineSize), (height = borderSize.blockSize)
          } else (width = element.offsetWidth), (height = element.offsetHeight)
          setSize({width, height})
        })
        return (
          resizeObserver.observe(element, {box: 'border-box'}),
          () => resizeObserver.unobserve(element)
        )
      } else setSize(void 0)
    }, [element]),
    size
  )
}
var $cf1ac5d9fe0e8206$var$POPPER_NAME = 'Popper',
  [
    $cf1ac5d9fe0e8206$var$createPopperContext,
    $cf1ac5d9fe0e8206$export$722aac194ae923,
  ] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(
    $cf1ac5d9fe0e8206$var$POPPER_NAME
  ),
  [
    $cf1ac5d9fe0e8206$var$PopperProvider,
    $cf1ac5d9fe0e8206$var$usePopperContext,
  ] = $cf1ac5d9fe0e8206$var$createPopperContext(
    $cf1ac5d9fe0e8206$var$POPPER_NAME
  ),
  $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
    let {__scopePopper, children} = props,
      [anchor, setAnchor] = (0, import_react15.useState)(null)
    return (0, import_react15.createElement)(
      $cf1ac5d9fe0e8206$var$PopperProvider,
      {scope: __scopePopper, anchor, onAnchorChange: setAnchor},
      children
    )
  },
  $cf1ac5d9fe0e8206$var$ANCHOR_NAME = 'PopperAnchor',
  $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = (0, import_react15.forwardRef)(
    (props, forwardedRef) => {
      let {__scopePopper, virtualRef, ...anchorProps} = props,
        context = $cf1ac5d9fe0e8206$var$usePopperContext(
          $cf1ac5d9fe0e8206$var$ANCHOR_NAME,
          __scopePopper
        ),
        ref = (0, import_react15.useRef)(null),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          ref
        )
      return (
        (0, import_react15.useEffect)(() => {
          context.onAnchorChange(virtualRef?.current || ref.current)
        }),
        virtualRef
          ? null
          : (0, import_react15.createElement)(
              $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
              _extends({}, anchorProps, {ref: composedRefs})
            )
      )
    }
  ),
  $cf1ac5d9fe0e8206$var$CONTENT_NAME = 'PopperContent',
  [
    $cf1ac5d9fe0e8206$var$PopperContentProvider,
    $cf1ac5d9fe0e8206$var$useContentContext,
  ] = $cf1ac5d9fe0e8206$var$createPopperContext(
    $cf1ac5d9fe0e8206$var$CONTENT_NAME
  ),
  $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = (0, import_react15.forwardRef)(
    (props, forwardedRef) => {
      var _arrowSize$width,
        _arrowSize$height,
        _middlewareData$arrow,
        _middlewareData$arrow2,
        _middlewareData$arrow3,
        _middlewareData$trans,
        _middlewareData$trans2,
        _middlewareData$hide
      let {
          __scopePopper,
          side = 'bottom',
          sideOffset = 0,
          align = 'center',
          alignOffset = 0,
          arrowPadding = 0,
          collisionBoundary = [],
          collisionPadding: collisionPaddingProp = 0,
          sticky = 'partial',
          hideWhenDetached = !1,
          avoidCollisions = !0,
          onPlaced,
          ...contentProps
        } = props,
        context = $cf1ac5d9fe0e8206$var$usePopperContext(
          $cf1ac5d9fe0e8206$var$CONTENT_NAME,
          __scopePopper
        ),
        [content, setContent] = (0, import_react15.useState)(null),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => setContent(node)
        ),
        [arrow2, setArrow] = (0, import_react15.useState)(null),
        arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow2),
        arrowWidth =
          (_arrowSize$width = arrowSize?.width) !== null &&
          _arrowSize$width !== void 0
            ? _arrowSize$width
            : 0,
        arrowHeight =
          (_arrowSize$height = arrowSize?.height) !== null &&
          _arrowSize$height !== void 0
            ? _arrowSize$height
            : 0,
        desiredPlacement = side + (align !== 'center' ? '-' + align : ''),
        collisionPadding =
          typeof collisionPaddingProp == 'number'
            ? collisionPaddingProp
            : {top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp},
        boundary = Array.isArray(collisionBoundary)
          ? collisionBoundary
          : [collisionBoundary],
        hasExplicitBoundaries = boundary.length > 0,
        detectOverflowOptions = {
          padding: collisionPadding,
          boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
          altBoundary: hasExplicitBoundaries,
        },
        {refs, floatingStyles, placement, isPositioned, middlewareData} =
          useFloating({
            strategy: 'fixed',
            placement: desiredPlacement,
            whileElementsMounted: A2,
            elements: {reference: context.anchor},
            middleware: [
              L({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset,
              }),
              avoidCollisions &&
                O({
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: sticky === 'partial' ? B() : void 0,
                  ...detectOverflowOptions,
                }),
              avoidCollisions && A({...detectOverflowOptions}),
              C({
                ...detectOverflowOptions,
                apply: ({elements, rects, availableWidth, availableHeight}) => {
                  let {width: anchorWidth, height: anchorHeight} =
                      rects.reference,
                    contentStyle = elements.floating.style
                  contentStyle.setProperty(
                    '--radix-popper-available-width',
                    `${availableWidth}px`
                  ),
                    contentStyle.setProperty(
                      '--radix-popper-available-height',
                      `${availableHeight}px`
                    ),
                    contentStyle.setProperty(
                      '--radix-popper-anchor-width',
                      `${anchorWidth}px`
                    ),
                    contentStyle.setProperty(
                      '--radix-popper-anchor-height',
                      `${anchorHeight}px`
                    )
                },
              }),
              arrow2 && arrow({element: arrow2, padding: arrowPadding}),
              $cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth, arrowHeight}),
              hideWhenDetached && E({strategy: 'referenceHidden'}),
            ],
          }),
        [placedSide, placedAlign] =
          $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement),
        handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced)
      $9f79659886946c16$export$e5c5a5f917a5871c(() => {
        isPositioned && handlePlaced?.()
      }, [isPositioned, handlePlaced])
      let arrowX =
          (_middlewareData$arrow = middlewareData.arrow) === null ||
          _middlewareData$arrow === void 0
            ? void 0
            : _middlewareData$arrow.x,
        arrowY =
          (_middlewareData$arrow2 = middlewareData.arrow) === null ||
          _middlewareData$arrow2 === void 0
            ? void 0
            : _middlewareData$arrow2.y,
        cannotCenterArrow =
          ((_middlewareData$arrow3 = middlewareData.arrow) === null ||
          _middlewareData$arrow3 === void 0
            ? void 0
            : _middlewareData$arrow3.centerOffset) !== 0,
        [contentZIndex, setContentZIndex] = (0, import_react15.useState)()
      return (
        $9f79659886946c16$export$e5c5a5f917a5871c(() => {
          content && setContentZIndex(window.getComputedStyle(content).zIndex)
        }, [content]),
        (0, import_react15.createElement)(
          'div',
          {
            ref: refs.setFloating,
            'data-radix-popper-content-wrapper': '',
            style: {
              ...floatingStyles,
              transform: isPositioned
                ? floatingStyles.transform
                : 'translate(0, -200%)',
              minWidth: 'max-content',
              zIndex: contentZIndex,
              '--radix-popper-transform-origin': [
                (_middlewareData$trans = middlewareData.transformOrigin) ===
                  null || _middlewareData$trans === void 0
                  ? void 0
                  : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) ===
                  null || _middlewareData$trans2 === void 0
                  ? void 0
                  : _middlewareData$trans2.y,
              ].join(' '),
            },
            dir: props.dir,
          },
          (0, import_react15.createElement)(
            $cf1ac5d9fe0e8206$var$PopperContentProvider,
            {
              scope: __scopePopper,
              placedSide,
              onArrowChange: setArrow,
              arrowX,
              arrowY,
              shouldHideArrow: cannotCenterArrow,
            },
            (0, import_react15.createElement)(
              $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
              _extends(
                {'data-side': placedSide, 'data-align': placedAlign},
                contentProps,
                {
                  ref: composedRefs,
                  style: {
                    ...contentProps.style,
                    animation: isPositioned ? void 0 : 'none',
                    opacity:
                      (_middlewareData$hide = middlewareData.hide) !== null &&
                      _middlewareData$hide !== void 0 &&
                      _middlewareData$hide.referenceHidden
                        ? 0
                        : void 0,
                  },
                }
              )
            )
          )
        )
      )
    }
  )
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: 'transformOrigin',
  options,
  fn(data) {
    var _middlewareData$arrow4,
      _middlewareData$arrow5,
      _middlewareData$arrow6,
      _middlewareData$arrow7,
      _middlewareData$arrow8
    let {placement, rects, middlewareData} = data,
      isArrowHidden =
        ((_middlewareData$arrow4 = middlewareData.arrow) === null ||
        _middlewareData$arrow4 === void 0
          ? void 0
          : _middlewareData$arrow4.centerOffset) !== 0,
      arrowWidth = isArrowHidden ? 0 : options.arrowWidth,
      arrowHeight = isArrowHidden ? 0 : options.arrowHeight,
      [placedSide, placedAlign] =
        $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement),
      noArrowAlign = {start: '0%', center: '50%', end: '100%'}[placedAlign],
      arrowXCenter =
        ((_middlewareData$arrow5 =
          (_middlewareData$arrow6 = middlewareData.arrow) === null ||
          _middlewareData$arrow6 === void 0
            ? void 0
            : _middlewareData$arrow6.x) !== null &&
        _middlewareData$arrow5 !== void 0
          ? _middlewareData$arrow5
          : 0) +
        arrowWidth / 2,
      arrowYCenter =
        ((_middlewareData$arrow7 =
          (_middlewareData$arrow8 = middlewareData.arrow) === null ||
          _middlewareData$arrow8 === void 0
            ? void 0
            : _middlewareData$arrow8.y) !== null &&
        _middlewareData$arrow7 !== void 0
          ? _middlewareData$arrow7
          : 0) +
        arrowHeight / 2,
      x3 = '',
      y3 = ''
    return (
      placedSide === 'bottom'
        ? ((x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`),
          (y3 = `${-arrowHeight}px`))
        : placedSide === 'top'
        ? ((x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`),
          (y3 = `${rects.floating.height + arrowHeight}px`))
        : placedSide === 'right'
        ? ((x3 = `${-arrowHeight}px`),
          (y3 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`))
        : placedSide === 'left' &&
          ((x3 = `${rects.floating.width + arrowHeight}px`),
          (y3 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`)),
      {data: {x: x3, y: y3}}
    )
  },
})
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  let [side, align = 'center'] = placement.split('-')
  return [side, align]
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 =
    $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7 =
    $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 =
    $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc
var import_react16 = __toESM(require_react(), 1),
  import_react_dom3 = __toESM(require_react_dom(), 1)
var $f1701beae083dbae$export$602eac185826482c = (0, import_react16.forwardRef)(
  (props, forwardedRef) => {
    var _globalThis$document
    let {
      container = globalThis == null ||
      (_globalThis$document = globalThis.document) === null ||
      _globalThis$document === void 0
        ? void 0
        : _globalThis$document.body,
      ...portalProps
    } = props
    return container
      ? import_react_dom3.default.createPortal(
          (0, import_react16.createElement)(
            $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
            _extends({}, portalProps, {ref: forwardedRef})
          ),
          container
        )
      : null
  }
)
var import_react17 = __toESM(require_react(), 1)
function $71cd76cc60e0454e$export$6f32135080cb4c3({
  prop,
  defaultProp,
  onChange = () => {},
}) {
  let [uncontrolledProp, setUncontrolledProp] =
      $71cd76cc60e0454e$var$useUncontrolledState({defaultProp, onChange}),
    isControlled = prop !== void 0,
    value1 = isControlled ? prop : uncontrolledProp,
    handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange),
    setValue = (0, import_react17.useCallback)(
      (nextValue) => {
        if (isControlled) {
          let value =
            typeof nextValue == 'function' ? nextValue(prop) : nextValue
          value !== prop && handleChange(value)
        } else setUncontrolledProp(nextValue)
      },
      [isControlled, prop, setUncontrolledProp, handleChange]
    )
  return [value1, setValue]
}
function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp, onChange}) {
  let uncontrolledState = (0, import_react17.useState)(defaultProp),
    [value] = uncontrolledState,
    prevValueRef = (0, import_react17.useRef)(value),
    handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange)
  return (
    (0, import_react17.useEffect)(() => {
      prevValueRef.current !== value &&
        (handleChange(value), (prevValueRef.current = value))
    }, [value, prevValueRef, handleChange]),
    uncontrolledState
  )
}
var import_react18 = __toESM(require_react(), 1)
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  let ref = (0, import_react18.useRef)({value, previous: value})
  return (0, import_react18.useMemo)(
    () => (
      ref.current.value !== value &&
        ((ref.current.previous = ref.current.value),
        (ref.current.value = value)),
      ref.current.previous
    ),
    [value]
  )
}
var import_react19 = __toESM(require_react(), 1)
var $ea1ef594cf570d83$export$439d29a4e110a164 = (0, import_react19.forwardRef)(
  (props, forwardedRef) =>
    (0, import_react19.createElement)(
      $8927f6f2acc4f386$export$250ffa63cdc0d034.span,
      _extends({}, props, {
        ref: forwardedRef,
        style: {
          position: 'absolute',
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
          ...props.style,
        },
      })
    )
)
var getDefaultParent = function (originalTarget) {
    if (typeof document > 'u') return null
    var sampleTarget = Array.isArray(originalTarget)
      ? originalTarget[0]
      : originalTarget
    return sampleTarget.ownerDocument.body
  },
  counterMap = new WeakMap(),
  uncontrolledNodes = new WeakMap(),
  markerMap = {},
  lockCount = 0,
  unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode))
  },
  correctTargets = function (parent, targets) {
    return targets
      .map(function (target) {
        if (parent.contains(target)) return target
        var correctedTarget = unwrapHost(target)
        return correctedTarget && parent.contains(correctedTarget)
          ? correctedTarget
          : (console.error(
              'aria-hidden',
              target,
              'in not contained inside',
              parent,
              '. Doing nothing'
            ),
            null)
      })
      .filter(function (x3) {
        return !!x3
      })
  },
  applyAttributeToOthers = function (
    originalTarget,
    parentNode,
    markerName,
    controlAttribute
  ) {
    var targets = correctTargets(
      parentNode,
      Array.isArray(originalTarget) ? originalTarget : [originalTarget]
    )
    markerMap[markerName] || (markerMap[markerName] = new WeakMap())
    var markerCounter = markerMap[markerName],
      hiddenNodes = [],
      elementsToKeep = new Set(),
      elementsToStop = new Set(targets),
      keep = function (el) {
        !el ||
          elementsToKeep.has(el) ||
          (elementsToKeep.add(el), keep(el.parentNode))
      }
    targets.forEach(keep)
    var deep = function (parent) {
      !parent ||
        elementsToStop.has(parent) ||
        Array.prototype.forEach.call(parent.children, function (node) {
          if (elementsToKeep.has(node)) deep(node)
          else {
            var attr = node.getAttribute(controlAttribute),
              alreadyHidden = attr !== null && attr !== 'false',
              counterValue = (counterMap.get(node) || 0) + 1,
              markerValue = (markerCounter.get(node) || 0) + 1
            counterMap.set(node, counterValue),
              markerCounter.set(node, markerValue),
              hiddenNodes.push(node),
              counterValue === 1 &&
                alreadyHidden &&
                uncontrolledNodes.set(node, !0),
              markerValue === 1 && node.setAttribute(markerName, 'true'),
              alreadyHidden || node.setAttribute(controlAttribute, 'true')
          }
        })
    }
    return (
      deep(parentNode),
      elementsToKeep.clear(),
      lockCount++,
      function () {
        hiddenNodes.forEach(function (node) {
          var counterValue = counterMap.get(node) - 1,
            markerValue = markerCounter.get(node) - 1
          counterMap.set(node, counterValue),
            markerCounter.set(node, markerValue),
            counterValue ||
              (uncontrolledNodes.has(node) ||
                node.removeAttribute(controlAttribute),
              uncontrolledNodes.delete(node)),
            markerValue || node.removeAttribute(markerName)
        }),
          lockCount--,
          lockCount ||
            ((counterMap = new WeakMap()),
            (counterMap = new WeakMap()),
            (uncontrolledNodes = new WeakMap()),
            (markerMap = {}))
      }
    )
  },
  hideOthers = function (originalTarget, parentNode, markerName) {
    markerName === void 0 && (markerName = 'data-aria-hidden')
    var targets = Array.from(
        Array.isArray(originalTarget) ? originalTarget : [originalTarget]
      ),
      activeParentNode = parentNode || getDefaultParent(originalTarget)
    return activeParentNode
      ? (targets.push.apply(
          targets,
          Array.from(activeParentNode.querySelectorAll('[aria-live]'))
        ),
        applyAttributeToOthers(
          targets,
          activeParentNode,
          markerName,
          'aria-hidden'
        ))
      : function () {
          return null
        }
  }
var React7 = __toESM(require_react())
var React3 = __toESM(require_react())
var zeroRightClassName = 'right-scroll-bar-position',
  fullWidthClassName = 'width-before-scroll-bar',
  noScrollbarsClassName = 'with-scroll-bars-hidden',
  removedBarSizeVariable = '--removed-body-scroll-bar-size'
function assignRef(ref, value) {
  return (
    typeof ref == 'function' ? ref(value) : ref && (ref.current = value), ref
  )
}
var import_react20 = __toESM(require_react())
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react20.useState)(function () {
    return {
      value: initialValue,
      callback,
      facade: {
        get current() {
          return ref.value
        },
        set current(value) {
          var last = ref.value
          last !== value && ((ref.value = value), ref.callback(value, last))
        },
      },
    }
  })[0]
  return (ref.callback = callback), ref.facade
}
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue)
    })
  })
}
function ItoI(a3) {
  return a3
}
function innerCreateMedium(defaults, middleware) {
  middleware === void 0 && (middleware = ItoI)
  var buffer = [],
    assigned = !1,
    medium = {
      read: function () {
        if (assigned)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          )
        return buffer.length ? buffer[buffer.length - 1] : defaults
      },
      useMedium: function (data) {
        var item = middleware(data, assigned)
        return (
          buffer.push(item),
          function () {
            buffer = buffer.filter(function (x3) {
              return x3 !== item
            })
          }
        )
      },
      assignSyncMedium: function (cb) {
        for (assigned = !0; buffer.length; ) {
          var cbs = buffer
          ;(buffer = []), cbs.forEach(cb)
        }
        buffer = {
          push: function (x3) {
            return cb(x3)
          },
          filter: function () {
            return buffer
          },
        }
      },
      assignMedium: function (cb) {
        assigned = !0
        var pendingQueue = []
        if (buffer.length) {
          var cbs = buffer
          ;(buffer = []), cbs.forEach(cb), (pendingQueue = buffer)
        }
        var executeQueue = function () {
            var cbs2 = pendingQueue
            ;(pendingQueue = []), cbs2.forEach(cb)
          },
          cycle = function () {
            return Promise.resolve().then(executeQueue)
          }
        cycle(),
          (buffer = {
            push: function (x3) {
              pendingQueue.push(x3), cycle()
            },
            filter: function (filter) {
              return (pendingQueue = pendingQueue.filter(filter)), buffer
            },
          })
      },
    }
  return medium
}
function createSidecarMedium(options) {
  options === void 0 && (options = {})
  var medium = innerCreateMedium(null)
  return (medium.options = __assign({async: !0, ssr: !1}, options)), medium
}
var React2 = __toESM(require_react()),
  SideCar = function (_a) {
    var sideCar = _a.sideCar,
      rest = __rest(_a, ['sideCar'])
    if (!sideCar)
      throw new Error(
        'Sidecar: please provide `sideCar` property to import the right car'
      )
    var Target = sideCar.read()
    if (!Target) throw new Error('Sidecar medium not found')
    return React2.createElement(Target, __assign({}, rest))
  }
SideCar.isSideCarExport = !0
function exportSidecar(medium, exported) {
  return medium.useMedium(exported), SideCar
}
var effectCar = createSidecarMedium()
var nothing = function () {},
  RemoveScroll = React3.forwardRef(function (props, parentRef) {
    var ref = React3.useRef(null),
      _a = React3.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
      }),
      callbacks = _a[0],
      setCallbacks = _a[1],
      forwardProps = props.forwardProps,
      children = props.children,
      className = props.className,
      removeScrollBar = props.removeScrollBar,
      enabled = props.enabled,
      shards = props.shards,
      sideCar = props.sideCar,
      noIsolation = props.noIsolation,
      inert = props.inert,
      allowPinchZoom = props.allowPinchZoom,
      _b = props.as,
      Container = _b === void 0 ? 'div' : _b,
      rest = __rest(props, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      SideCar2 = sideCar,
      containerRef = useMergeRefs([ref, parentRef]),
      containerProps = __assign(__assign({}, rest), callbacks)
    return React3.createElement(
      React3.Fragment,
      null,
      enabled &&
        React3.createElement(SideCar2, {
          sideCar: effectCar,
          removeScrollBar,
          shards,
          noIsolation,
          inert,
          setCallbacks,
          allowPinchZoom: !!allowPinchZoom,
          lockRef: ref,
        }),
      forwardProps
        ? React3.cloneElement(
            React3.Children.only(children),
            __assign(__assign({}, containerProps), {ref: containerRef})
          )
        : React3.createElement(
            Container,
            __assign({}, containerProps, {className, ref: containerRef}),
            children
          )
    )
  })
RemoveScroll.defaultProps = {enabled: !0, removeScrollBar: !0, inert: !1}
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName,
}
var React6 = __toESM(require_react())
var React5 = __toESM(require_react())
var React4 = __toESM(require_react())
var currentNonce
var getNonce = function () {
  if (currentNonce) return currentNonce
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
}
function makeStyleTag() {
  if (!document) return null
  var tag = document.createElement('style')
  tag.type = 'text/css'
  var nonce = getNonce()
  return nonce && tag.setAttribute('nonce', nonce), tag
}
function injectStyles(tag, css) {
  tag.styleSheet
    ? (tag.styleSheet.cssText = css)
    : tag.appendChild(document.createTextNode(css))
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName('head')[0]
  head.appendChild(tag)
}
var stylesheetSingleton = function () {
  var counter = 0,
    stylesheet = null
  return {
    add: function (style) {
      counter == 0 &&
        (stylesheet = makeStyleTag()) &&
        (injectStyles(stylesheet, style), insertStyleTag(stylesheet)),
        counter++
    },
    remove: function () {
      counter--,
        !counter &&
          stylesheet &&
          (stylesheet.parentNode &&
            stylesheet.parentNode.removeChild(stylesheet),
          (stylesheet = null))
    },
  }
}
var styleHookSingleton = function () {
  var sheet = stylesheetSingleton()
  return function (styles, isDynamic) {
    React4.useEffect(
      function () {
        return (
          sheet.add(styles),
          function () {
            sheet.remove()
          }
        )
      },
      [styles && isDynamic]
    )
  }
}
var styleSingleton = function () {
  var useStyle = styleHookSingleton(),
    Sheet = function (_a) {
      var styles = _a.styles,
        dynamic = _a.dynamic
      return useStyle(styles, dynamic), null
    }
  return Sheet
}
var zeroGap = {left: 0, top: 0, right: 0, gap: 0},
  parse = function (x3) {
    return parseInt(x3 || '', 10) || 0
  },
  getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body),
      left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'],
      top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'],
      right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight']
    return [parse(left), parse(top), parse(right)]
  },
  getGapWidth = function (gapMode) {
    if ((gapMode === void 0 && (gapMode = 'margin'), typeof window > 'u'))
      return zeroGap
    var offsets = getOffset(gapMode),
      documentWidth = document.documentElement.clientWidth,
      windowWidth = window.innerWidth
    return {
      left: offsets[0],
      top: offsets[1],
      right: offsets[2],
      gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    }
  }
var Style = styleSingleton(),
  getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left,
      top = _a.top,
      right = _a.right,
      gap = _a.gap
    return (
      gapMode === void 0 && (gapMode = 'margin'),
      `
  .`
        .concat(
          noScrollbarsClassName,
          ` {
   overflow: hidden `
        )
        .concat(
          important,
          `;
   padding-right: `
        )
        .concat(gap, 'px ')
        .concat(
          important,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          important,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            allowRelative && 'position: relative '.concat(important, ';'),
            gapMode === 'margin' &&
              `
    padding-left: `
                .concat(
                  left,
                  `px;
    padding-top: `
                )
                .concat(
                  top,
                  `px;
    padding-right: `
                )
                .concat(
                  right,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(gap, 'px ')
                .concat(
                  important,
                  `;
    `
                ),
            gapMode === 'padding' &&
              'padding-right: '.concat(gap, 'px ').concat(important, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          zeroRightClassName,
          ` {
    right: `
        )
        .concat(gap, 'px ')
        .concat(
          important,
          `;
  }
  
  .`
        )
        .concat(
          fullWidthClassName,
          ` {
    margin-right: `
        )
        .concat(gap, 'px ')
        .concat(
          important,
          `;
  }
  
  .`
        )
        .concat(zeroRightClassName, ' .')
        .concat(
          zeroRightClassName,
          ` {
    right: 0 `
        )
        .concat(
          important,
          `;
  }
  
  .`
        )
        .concat(fullWidthClassName, ' .')
        .concat(
          fullWidthClassName,
          ` {
    margin-right: 0 `
        )
        .concat(
          important,
          `;
  }
  
  body {
    `
        )
        .concat(removedBarSizeVariable, ': ')
        .concat(
          gap,
          `px;
  }
`
        )
    )
  },
  RemoveScrollBar = function (props) {
    var noRelative = props.noRelative,
      noImportant = props.noImportant,
      _a = props.gapMode,
      gapMode = _a === void 0 ? 'margin' : _a,
      gap = React5.useMemo(
        function () {
          return getGapWidth(gapMode)
        },
        [gapMode]
      )
    return React5.createElement(Style, {
      styles: getStyles(
        gap,
        !noRelative,
        gapMode,
        noImportant ? '' : '!important'
      ),
    })
  }
var passiveSupported = !1
if (typeof window < 'u')
  try {
    ;(options = Object.defineProperty({}, 'passive', {
      get: function () {
        return (passiveSupported = !0), !0
      },
    })),
      window.addEventListener('test', options, options),
      window.removeEventListener('test', options, options)
  } catch {
    passiveSupported = !1
  }
var options,
  nonPassive = passiveSupported ? {passive: !1} : !1
var alwaysContainsScroll = function (node) {
    return node.tagName === 'TEXTAREA'
  },
  elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node)
    return (
      styles[overflow] !== 'hidden' &&
      !(
        styles.overflowY === styles.overflowX &&
        !alwaysContainsScroll(node) &&
        styles[overflow] === 'visible'
      )
    )
  },
  elementCouldBeVScrolled = function (node) {
    return elementCanBeScrolled(node, 'overflowY')
  },
  elementCouldBeHScrolled = function (node) {
    return elementCanBeScrolled(node, 'overflowX')
  },
  locationCouldBeScrolled = function (axis, node) {
    var current = node
    do {
      typeof ShadowRoot < 'u' &&
        current instanceof ShadowRoot &&
        (current = current.host)
      var isScrollable = elementCouldBeScrolled(axis, current)
      if (isScrollable) {
        var _a = getScrollVariables(axis, current),
          s3 = _a[1],
          d3 = _a[2]
        if (s3 > d3) return !0
      }
      current = current.parentNode
    } while (current && current !== document.body)
    return !1
  },
  getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop,
      scrollHeight = _a.scrollHeight,
      clientHeight = _a.clientHeight
    return [scrollTop, scrollHeight, clientHeight]
  },
  getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft,
      scrollWidth = _a.scrollWidth,
      clientWidth = _a.clientWidth
    return [scrollLeft, scrollWidth, clientWidth]
  },
  elementCouldBeScrolled = function (axis, node) {
    return axis === 'v'
      ? elementCouldBeVScrolled(node)
      : elementCouldBeHScrolled(node)
  },
  getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node)
  },
  getDirectionFactor = function (axis, direction) {
    return axis === 'h' && direction === 'rtl' ? -1 : 1
  },
  handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(
        axis,
        window.getComputedStyle(endTarget).direction
      ),
      delta = directionFactor * sourceDelta,
      target = event.target,
      targetInLock = endTarget.contains(target),
      shouldCancelScroll = !1,
      isDeltaPositive = delta > 0,
      availableScroll = 0,
      availableScrollTop = 0
    do {
      var _a = getScrollVariables(axis, target),
        position = _a[0],
        scroll_1 = _a[1],
        capacity = _a[2],
        elementScroll = scroll_1 - capacity - directionFactor * position
      ;(position || elementScroll) &&
        elementCouldBeScrolled(axis, target) &&
        ((availableScroll += elementScroll), (availableScrollTop += position)),
        (target = target.parentNode)
    } while (
      (!targetInLock && target !== document.body) ||
      (targetInLock && (endTarget.contains(target) || endTarget === target))
    )
    return (
      ((isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
          (!noOverscroll && delta > availableScroll))) ||
        (!isDeltaPositive &&
          ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop)))) &&
        (shouldCancelScroll = !0),
      shouldCancelScroll
    )
  }
var getTouchXY = function (event) {
    return 'changedTouches' in event
      ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
      : [0, 0]
  },
  getDeltaXY = function (event) {
    return [event.deltaX, event.deltaY]
  },
  extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref
  },
  deltaCompare = function (x3, y3) {
    return x3[0] === y3[0] && x3[1] === y3[1]
  },
  generateStyle = function (id) {
    return `
  .block-interactivity-`
      .concat(
        id,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        id,
        ` {pointer-events: all;}
`
      )
  },
  idCounter = 0,
  lockStack = []
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React6.useRef([]),
    touchStartRef = React6.useRef([0, 0]),
    activeAxis = React6.useRef(),
    id = React6.useState(idCounter++)[0],
    Style2 = React6.useState(function () {
      return styleSingleton()
    })[0],
    lastProps = React6.useRef(props)
  React6.useEffect(
    function () {
      lastProps.current = props
    },
    [props]
  ),
    React6.useEffect(
      function () {
        if (props.inert) {
          document.body.classList.add('block-interactivity-'.concat(id))
          var allow_1 = __spreadArray(
            [props.lockRef.current],
            (props.shards || []).map(extractRef),
            !0
          ).filter(Boolean)
          return (
            allow_1.forEach(function (el) {
              return el.classList.add('allow-interactivity-'.concat(id))
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(id)),
                allow_1.forEach(function (el) {
                  return el.classList.remove('allow-interactivity-'.concat(id))
                })
            }
          )
        }
      },
      [props.inert, props.lockRef.current, props.shards]
    )
  var shouldCancelEvent = React6.useCallback(function (event, parent) {
      if ('touches' in event && event.touches.length === 2)
        return !lastProps.current.allowPinchZoom
      var touch = getTouchXY(event),
        touchStart = touchStartRef.current,
        deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0],
        deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1],
        currentAxis,
        target = event.target,
        moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v'
      if (
        'touches' in event &&
        moveDirection === 'h' &&
        target.type === 'range'
      )
        return !1
      var canBeScrolledInMainDirection = locationCouldBeScrolled(
        moveDirection,
        target
      )
      if (!canBeScrolledInMainDirection) return !0
      if (
        (canBeScrolledInMainDirection
          ? (currentAxis = moveDirection)
          : ((currentAxis = moveDirection === 'v' ? 'h' : 'v'),
            (canBeScrolledInMainDirection = locationCouldBeScrolled(
              moveDirection,
              target
            ))),
        !canBeScrolledInMainDirection)
      )
        return !1
      if (
        (!activeAxis.current &&
          'changedTouches' in event &&
          (deltaX || deltaY) &&
          (activeAxis.current = currentAxis),
        !currentAxis)
      )
        return !0
      var cancelingAxis = activeAxis.current || currentAxis
      return handleScroll(
        cancelingAxis,
        parent,
        event,
        cancelingAxis === 'h' ? deltaX : deltaY,
        !0
      )
    }, []),
    shouldPrevent = React6.useCallback(function (_event) {
      var event = _event
      if (!(!lockStack.length || lockStack[lockStack.length - 1] !== Style2)) {
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event),
          sourceEvent = shouldPreventQueue.current.filter(function (e2) {
            return (
              e2.name === event.type &&
              e2.target === event.target &&
              deltaCompare(e2.delta, delta)
            )
          })[0]
        if (sourceEvent && sourceEvent.should) {
          event.cancelable && event.preventDefault()
          return
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || [])
              .map(extractRef)
              .filter(Boolean)
              .filter(function (node) {
                return node.contains(event.target)
              }),
            shouldStop =
              shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation
          shouldStop && event.cancelable && event.preventDefault()
        }
      }
    }, []),
    shouldCancel = React6.useCallback(function (name, delta, target, should) {
      var event = {name, delta, target, should}
      shouldPreventQueue.current.push(event),
        setTimeout(function () {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(
            function (e2) {
              return e2 !== event
            }
          )
        }, 1)
    }, []),
    scrollTouchStart = React6.useCallback(function (event) {
      ;(touchStartRef.current = getTouchXY(event)),
        (activeAxis.current = void 0)
    }, []),
    scrollWheel = React6.useCallback(function (event) {
      shouldCancel(
        event.type,
        getDeltaXY(event),
        event.target,
        shouldCancelEvent(event, props.lockRef.current)
      )
    }, []),
    scrollTouchMove = React6.useCallback(function (event) {
      shouldCancel(
        event.type,
        getTouchXY(event),
        event.target,
        shouldCancelEvent(event, props.lockRef.current)
      )
    }, [])
  React6.useEffect(function () {
    return (
      lockStack.push(Style2),
      props.setCallbacks({
        onScrollCapture: scrollWheel,
        onWheelCapture: scrollWheel,
        onTouchMoveCapture: scrollTouchMove,
      }),
      document.addEventListener('wheel', shouldPrevent, nonPassive),
      document.addEventListener('touchmove', shouldPrevent, nonPassive),
      document.addEventListener('touchstart', scrollTouchStart, nonPassive),
      function () {
        ;(lockStack = lockStack.filter(function (inst) {
          return inst !== Style2
        })),
          document.removeEventListener('wheel', shouldPrevent, nonPassive),
          document.removeEventListener('touchmove', shouldPrevent, nonPassive),
          document.removeEventListener(
            'touchstart',
            scrollTouchStart,
            nonPassive
          )
      }
    )
  }, [])
  var removeScrollBar = props.removeScrollBar,
    inert = props.inert
  return React6.createElement(
    React6.Fragment,
    null,
    inert ? React6.createElement(Style2, {styles: generateStyle(id)}) : null,
    removeScrollBar
      ? React6.createElement(RemoveScrollBar, {gapMode: 'margin'})
      : null
  )
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar)
var ReactRemoveScroll = React7.forwardRef(function (props, ref) {
  return React7.createElement(
    RemoveScroll,
    __assign({}, props, {ref, sideCar: sidecar_default})
  )
})
ReactRemoveScroll.classNames = RemoveScroll.classNames
var Combination_default = ReactRemoveScroll
var $cc7e05a45900e73f$var$OPEN_KEYS = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  $cc7e05a45900e73f$var$SELECTION_KEYS = [' ', 'Enter'],
  $cc7e05a45900e73f$var$SELECT_NAME = 'Select',
  [
    $cc7e05a45900e73f$var$Collection,
    $cc7e05a45900e73f$var$useCollection,
    $cc7e05a45900e73f$var$createCollectionScope,
  ] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(
    $cc7e05a45900e73f$var$SELECT_NAME
  ),
  [
    $cc7e05a45900e73f$var$createSelectContext,
    $cc7e05a45900e73f$export$286727a75dc039bd,
  ] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(
    $cc7e05a45900e73f$var$SELECT_NAME,
    [
      $cc7e05a45900e73f$var$createCollectionScope,
      $cf1ac5d9fe0e8206$export$722aac194ae923,
    ]
  ),
  $cc7e05a45900e73f$var$usePopperScope =
    $cf1ac5d9fe0e8206$export$722aac194ae923(),
  [
    $cc7e05a45900e73f$var$SelectProvider,
    $cc7e05a45900e73f$var$useSelectContext,
  ] = $cc7e05a45900e73f$var$createSelectContext(
    $cc7e05a45900e73f$var$SELECT_NAME
  ),
  [
    $cc7e05a45900e73f$var$SelectNativeOptionsProvider,
    $cc7e05a45900e73f$var$useSelectNativeOptionsContext,
  ] = $cc7e05a45900e73f$var$createSelectContext(
    $cc7e05a45900e73f$var$SELECT_NAME
  ),
  $cc7e05a45900e73f$export$ef9b1a59e592288f = (props) => {
    let {
        __scopeSelect,
        children,
        open: openProp,
        defaultOpen,
        onOpenChange,
        value: valueProp,
        defaultValue,
        onValueChange,
        dir,
        name,
        autoComplete,
        disabled,
        required,
      } = props,
      popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect),
      [trigger, setTrigger] = (0, import_react21.useState)(null),
      [valueNode, setValueNode] = (0, import_react21.useState)(null),
      [valueNodeHasChildren, setValueNodeHasChildren] = (0,
      import_react21.useState)(!1),
      direction = $f631663db3294ace$export$b39126d51d94e6f3(dir),
      [open = !1, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange,
      }),
      [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange,
      }),
      triggerPointerDownPosRef = (0, import_react21.useRef)(null),
      isFormControl = trigger ? !!trigger.closest('form') : !0,
      [nativeOptionsSet, setNativeOptionsSet] = (0, import_react21.useState)(
        new Set()
      ),
      nativeSelectKey = Array.from(nativeOptionsSet)
        .map((option) => option.props.value)
        .join(';')
    return (0, import_react21.createElement)(
      $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
      popperScope,
      (0, import_react21.createElement)(
        $cc7e05a45900e73f$var$SelectProvider,
        {
          required,
          scope: __scopeSelect,
          trigger,
          onTriggerChange: setTrigger,
          valueNode,
          onValueNodeChange: setValueNode,
          valueNodeHasChildren,
          onValueNodeHasChildrenChange: setValueNodeHasChildren,
          contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
          value,
          onValueChange: setValue,
          open,
          onOpenChange: setOpen,
          dir: direction,
          triggerPointerDownPosRef,
          disabled,
        },
        (0, import_react21.createElement)(
          $cc7e05a45900e73f$var$Collection.Provider,
          {scope: __scopeSelect},
          (0, import_react21.createElement)(
            $cc7e05a45900e73f$var$SelectNativeOptionsProvider,
            {
              scope: props.__scopeSelect,
              onNativeOptionAdd: (0, import_react21.useCallback)((option) => {
                setNativeOptionsSet((prev) => new Set(prev).add(option))
              }, []),
              onNativeOptionRemove: (0, import_react21.useCallback)(
                (option) => {
                  setNativeOptionsSet((prev) => {
                    let optionsSet = new Set(prev)
                    return optionsSet.delete(option), optionsSet
                  })
                },
                []
              ),
            },
            children
          )
        ),
        isFormControl
          ? (0, import_react21.createElement)(
              $cc7e05a45900e73f$var$BubbleSelect,
              {
                key: nativeSelectKey,
                'aria-hidden': !0,
                required,
                tabIndex: -1,
                name,
                autoComplete,
                value,
                onChange: (event) => setValue(event.target.value),
                disabled,
              },
              value === void 0
                ? (0, import_react21.createElement)('option', {value: ''})
                : null,
              Array.from(nativeOptionsSet)
            )
          : null
      )
    )
  },
  $cc7e05a45900e73f$var$TRIGGER_NAME = 'SelectTrigger',
  $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, disabled = !1, ...triggerProps} = props,
        popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect),
        context = $cc7e05a45900e73f$var$useSelectContext(
          $cc7e05a45900e73f$var$TRIGGER_NAME,
          __scopeSelect
        ),
        isDisabled = context.disabled || disabled,
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          context.onTriggerChange
        ),
        getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect),
        [searchRef, handleTypeaheadSearch, resetTypeahead] =
          $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
            let enabledItems = getItems().filter((item) => !item.disabled),
              currentItem = enabledItems.find(
                (item) => item.value === context.value
              ),
              nextItem = $cc7e05a45900e73f$var$findNextItem(
                enabledItems,
                search,
                currentItem
              )
            nextItem !== void 0 && context.onValueChange(nextItem.value)
          }),
        handleOpen = () => {
          isDisabled || (context.onOpenChange(!0), resetTypeahead())
        }
      return (0, import_react21.createElement)(
        $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
        _extends({asChild: !0}, popperScope),
        (0, import_react21.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.button,
          _extends(
            {
              type: 'button',
              role: 'combobox',
              'aria-controls': context.contentId,
              'aria-expanded': context.open,
              'aria-required': context.required,
              'aria-autocomplete': 'none',
              dir: context.dir,
              'data-state': context.open ? 'open' : 'closed',
              disabled: isDisabled,
              'data-disabled': isDisabled ? '' : void 0,
              'data-placeholder': context.value === void 0 ? '' : void 0,
            },
            triggerProps,
            {
              ref: composedRefs,
              onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                triggerProps.onClick,
                (event) => {
                  event.currentTarget.focus()
                }
              ),
              onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                triggerProps.onPointerDown,
                (event) => {
                  let target = event.target
                  target.hasPointerCapture(event.pointerId) &&
                    target.releasePointerCapture(event.pointerId),
                    event.button === 0 &&
                      event.ctrlKey === !1 &&
                      (handleOpen(),
                      (context.triggerPointerDownPosRef.current = {
                        x: Math.round(event.pageX),
                        y: Math.round(event.pageY),
                      }),
                      event.preventDefault())
                }
              ),
              onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                triggerProps.onKeyDown,
                (event) => {
                  let isTypingAhead = searchRef.current !== ''
                  !(event.ctrlKey || event.altKey || event.metaKey) &&
                    event.key.length === 1 &&
                    handleTypeaheadSearch(event.key),
                    !(isTypingAhead && event.key === ' ') &&
                      $cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key) &&
                      (handleOpen(), event.preventDefault())
                }
              ),
            }
          )
        )
      )
    }
  ),
  $cc7e05a45900e73f$var$VALUE_NAME = 'SelectValue',
  $cc7e05a45900e73f$export$e288731fd71264f0 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {
          __scopeSelect,
          className,
          style,
          children,
          placeholder,
          ...valueProps
        } = props,
        context = $cc7e05a45900e73f$var$useSelectContext(
          $cc7e05a45900e73f$var$VALUE_NAME,
          __scopeSelect
        ),
        {onValueNodeHasChildrenChange} = context,
        hasChildren = children !== void 0,
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          context.onValueNodeChange
        )
      return (
        $9f79659886946c16$export$e5c5a5f917a5871c(() => {
          onValueNodeHasChildrenChange(hasChildren)
        }, [onValueNodeHasChildrenChange, hasChildren]),
        (0, import_react21.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.span,
          _extends({}, valueProps, {
            ref: composedRefs,
            style: {pointerEvents: 'none'},
          }),
          context.value === void 0 && placeholder !== void 0
            ? placeholder
            : children
        )
      )
    }
  )
var $cc7e05a45900e73f$export$99b400cabb58c515 = (0, import_react21.forwardRef)(
  (props, forwardedRef) => {
    let {__scopeSelect, children, ...iconProps} = props
    return (0, import_react21.createElement)(
      $8927f6f2acc4f386$export$250ffa63cdc0d034.span,
      _extends({'aria-hidden': !0}, iconProps, {ref: forwardedRef}),
      children || '\u25BC'
    )
  }
)
var $cc7e05a45900e73f$export$b2af6c9944296213 = (props) =>
    (0, import_react21.createElement)(
      $f1701beae083dbae$export$602eac185826482c,
      _extends({asChild: !0}, props)
    ),
  $cc7e05a45900e73f$var$CONTENT_NAME = 'SelectContent',
  $cc7e05a45900e73f$export$c973a4b3cb86a03d = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let context = $cc7e05a45900e73f$var$useSelectContext(
          $cc7e05a45900e73f$var$CONTENT_NAME,
          props.__scopeSelect
        ),
        [fragment, setFragment] = (0, import_react21.useState)()
      if (
        ($9f79659886946c16$export$e5c5a5f917a5871c(() => {
          setFragment(new DocumentFragment())
        }, []),
        !context.open)
      ) {
        let frag = fragment
        return frag
          ? (0, import_react_dom4.createPortal)(
              (0, import_react21.createElement)(
                $cc7e05a45900e73f$var$SelectContentProvider,
                {scope: props.__scopeSelect},
                (0, import_react21.createElement)(
                  $cc7e05a45900e73f$var$Collection.Slot,
                  {scope: props.__scopeSelect},
                  (0, import_react21.createElement)('div', null, props.children)
                )
              ),
              frag
            )
          : null
      }
      return (0, import_react21.createElement)(
        $cc7e05a45900e73f$var$SelectContentImpl,
        _extends({}, props, {ref: forwardedRef})
      )
    }
  ),
  $cc7e05a45900e73f$var$CONTENT_MARGIN = 10,
  [
    $cc7e05a45900e73f$var$SelectContentProvider,
    $cc7e05a45900e73f$var$useSelectContentContext,
  ] = $cc7e05a45900e73f$var$createSelectContext(
    $cc7e05a45900e73f$var$CONTENT_NAME
  )
var $cc7e05a45900e73f$var$SelectContentImpl = (0, import_react21.forwardRef)(
  (props, forwardedRef) => {
    let {
        __scopeSelect,
        position = 'item-aligned',
        onCloseAutoFocus,
        onEscapeKeyDown,
        onPointerDownOutside,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions,
        ...contentProps
      } = props,
      context = $cc7e05a45900e73f$var$useSelectContext(
        $cc7e05a45900e73f$var$CONTENT_NAME,
        __scopeSelect
      ),
      [content, setContent] = (0, import_react21.useState)(null),
      [viewport, setViewport] = (0, import_react21.useState)(null),
      composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        (node) => setContent(node)
      ),
      [selectedItem, setSelectedItem] = (0, import_react21.useState)(null),
      [selectedItemText, setSelectedItemText] = (0, import_react21.useState)(
        null
      ),
      getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect),
      [isPositioned, setIsPositioned] = (0, import_react21.useState)(!1),
      firstValidItemFoundRef = (0, import_react21.useRef)(!1)
    ;(0, import_react21.useEffect)(() => {
      if (content) return hideOthers(content)
    }, [content]),
      $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c()
    let focusFirst = (0, import_react21.useCallback)(
        (candidates) => {
          let [firstItem, ...restItems] = getItems().map(
              (item) => item.ref.current
            ),
            [lastItem] = restItems.slice(-1),
            PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement
          for (let candidate of candidates)
            if (
              candidate === PREVIOUSLY_FOCUSED_ELEMENT ||
              (candidate?.scrollIntoView({block: 'nearest'}),
              candidate === firstItem && viewport && (viewport.scrollTop = 0),
              candidate === lastItem &&
                viewport &&
                (viewport.scrollTop = viewport.scrollHeight),
              candidate?.focus(),
              document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
            )
              return
        },
        [getItems, viewport]
      ),
      focusSelectedItem = (0, import_react21.useCallback)(
        () => focusFirst([selectedItem, content]),
        [focusFirst, selectedItem, content]
      )
    ;(0, import_react21.useEffect)(() => {
      isPositioned && focusSelectedItem()
    }, [isPositioned, focusSelectedItem])
    let {onOpenChange, triggerPointerDownPosRef} = context
    ;(0, import_react21.useEffect)(() => {
      if (content) {
        let pointerMoveDelta = {x: 0, y: 0},
          handlePointerMove = (event) => {
            var _triggerPointerDownPo,
              _triggerPointerDownPo2,
              _triggerPointerDownPo3,
              _triggerPointerDownPo4
            pointerMoveDelta = {
              x: Math.abs(
                Math.round(event.pageX) -
                  ((_triggerPointerDownPo =
                    (_triggerPointerDownPo2 =
                      triggerPointerDownPosRef.current) === null ||
                    _triggerPointerDownPo2 === void 0
                      ? void 0
                      : _triggerPointerDownPo2.x) !== null &&
                  _triggerPointerDownPo !== void 0
                    ? _triggerPointerDownPo
                    : 0)
              ),
              y: Math.abs(
                Math.round(event.pageY) -
                  ((_triggerPointerDownPo3 =
                    (_triggerPointerDownPo4 =
                      triggerPointerDownPosRef.current) === null ||
                    _triggerPointerDownPo4 === void 0
                      ? void 0
                      : _triggerPointerDownPo4.y) !== null &&
                  _triggerPointerDownPo3 !== void 0
                    ? _triggerPointerDownPo3
                    : 0)
              ),
            }
          },
          handlePointerUp = (event) => {
            pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10
              ? event.preventDefault()
              : content.contains(event.target) || onOpenChange(!1),
              document.removeEventListener('pointermove', handlePointerMove),
              (triggerPointerDownPosRef.current = null)
          }
        return (
          triggerPointerDownPosRef.current !== null &&
            (document.addEventListener('pointermove', handlePointerMove),
            document.addEventListener('pointerup', handlePointerUp, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener('pointermove', handlePointerMove),
              document.removeEventListener('pointerup', handlePointerUp, {
                capture: !0,
              })
          }
        )
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]),
      (0, import_react21.useEffect)(() => {
        let close = () => onOpenChange(!1)
        return (
          window.addEventListener('blur', close),
          window.addEventListener('resize', close),
          () => {
            window.removeEventListener('blur', close),
              window.removeEventListener('resize', close)
          }
        )
      }, [onOpenChange])
    let [searchRef, handleTypeaheadSearch] =
        $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
          let enabledItems = getItems().filter((item) => !item.disabled),
            currentItem = enabledItems.find(
              (item) => item.ref.current === document.activeElement
            ),
            nextItem = $cc7e05a45900e73f$var$findNextItem(
              enabledItems,
              search,
              currentItem
            )
          nextItem && setTimeout(() => nextItem.ref.current.focus())
        }),
      itemRefCallback = (0, import_react21.useCallback)(
        (node, value, disabled) => {
          let isFirstValidItem = !firstValidItemFoundRef.current && !disabled
          ;((context.value !== void 0 && context.value === value) ||
            isFirstValidItem) &&
            (setSelectedItem(node),
            isFirstValidItem && (firstValidItemFoundRef.current = !0))
        },
        [context.value]
      ),
      handleItemLeave = (0, import_react21.useCallback)(
        () => content?.focus(),
        [content]
      ),
      itemTextRefCallback = (0, import_react21.useCallback)(
        (node, value, disabled) => {
          let isFirstValidItem = !firstValidItemFoundRef.current && !disabled
          ;((context.value !== void 0 && context.value === value) ||
            isFirstValidItem) &&
            setSelectedItemText(node)
        },
        [context.value]
      ),
      SelectPosition =
        position === 'popper'
          ? $cc7e05a45900e73f$var$SelectPopperPosition
          : $cc7e05a45900e73f$var$SelectItemAlignedPosition,
      popperContentProps =
        SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition
          ? {
              side,
              sideOffset,
              align,
              alignOffset,
              arrowPadding,
              collisionBoundary,
              collisionPadding,
              sticky,
              hideWhenDetached,
              avoidCollisions,
            }
          : {}
    return (0, import_react21.createElement)(
      $cc7e05a45900e73f$var$SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
      },
      (0, import_react21.createElement)(
        Combination_default,
        {as: $5e63c961fc1ce211$export$8c6ed5c666ac1360, allowPinchZoom: !0},
        (0, import_react21.createElement)(
          $d3863c46a17e8a28$export$20e40289641fbbb6,
          {
            asChild: !0,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault()
            },
            onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              onCloseAutoFocus,
              (event) => {
                var _context$trigger
                ;(_context$trigger = context.trigger) === null ||
                  _context$trigger === void 0 ||
                  _context$trigger.focus({preventScroll: !0}),
                  event.preventDefault()
              }
            ),
          },
          (0, import_react21.createElement)(
            $5cb92bef7577960e$export$177fb62ff3ec1f22,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown,
              onPointerDownOutside,
              onFocusOutside: (event) => event.preventDefault(),
              onDismiss: () => context.onOpenChange(!1),
            },
            (0, import_react21.createElement)(
              SelectPosition,
              _extends(
                {
                  role: 'listbox',
                  id: context.contentId,
                  'data-state': context.open ? 'open' : 'closed',
                  dir: context.dir,
                  onContextMenu: (event) => event.preventDefault(),
                },
                contentProps,
                popperContentProps,
                {
                  onPlaced: () => setIsPositioned(!0),
                  ref: composedRefs,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    outline: 'none',
                    ...contentProps.style,
                  },
                  onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    contentProps.onKeyDown,
                    (event) => {
                      let isModifierKey =
                        event.ctrlKey || event.altKey || event.metaKey
                      if (
                        (event.key === 'Tab' && event.preventDefault(),
                        !isModifierKey &&
                          event.key.length === 1 &&
                          handleTypeaheadSearch(event.key),
                        ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(
                          event.key
                        ))
                      ) {
                        let candidateNodes = getItems()
                          .filter((item) => !item.disabled)
                          .map((item) => item.ref.current)
                        if (
                          (['ArrowUp', 'End'].includes(event.key) &&
                            (candidateNodes = candidateNodes.slice().reverse()),
                          ['ArrowUp', 'ArrowDown'].includes(event.key))
                        ) {
                          let currentElement = event.target,
                            currentIndex =
                              candidateNodes.indexOf(currentElement)
                          candidateNodes = candidateNodes.slice(
                            currentIndex + 1
                          )
                        }
                        setTimeout(() => focusFirst(candidateNodes)),
                          event.preventDefault()
                      }
                    }
                  ),
                }
              )
            )
          )
        )
      )
    )
  }
)
var $cc7e05a45900e73f$var$SelectItemAlignedPosition = (0,
import_react21.forwardRef)((props, forwardedRef) => {
  let {__scopeSelect, onPlaced, ...popperProps} = props,
    context = $cc7e05a45900e73f$var$useSelectContext(
      $cc7e05a45900e73f$var$CONTENT_NAME,
      __scopeSelect
    ),
    contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
      $cc7e05a45900e73f$var$CONTENT_NAME,
      __scopeSelect
    ),
    [contentWrapper, setContentWrapper] = (0, import_react21.useState)(null),
    [content, setContent] = (0, import_react21.useState)(null),
    composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setContent(node)
    ),
    getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect),
    shouldExpandOnScrollRef = (0, import_react21.useRef)(!1),
    shouldRepositionRef = (0, import_react21.useRef)(!0),
    {viewport, selectedItem, selectedItemText, focusSelectedItem} =
      contentContext,
    position = (0, import_react21.useCallback)(() => {
      if (
        context.trigger &&
        context.valueNode &&
        contentWrapper &&
        content &&
        viewport &&
        selectedItem &&
        selectedItemText
      ) {
        let triggerRect = context.trigger.getBoundingClientRect(),
          contentRect = content.getBoundingClientRect(),
          valueNodeRect = context.valueNode.getBoundingClientRect(),
          itemTextRect = selectedItemText.getBoundingClientRect()
        if (context.dir !== 'rtl') {
          let itemTextOffset = itemTextRect.left - contentRect.left,
            left = valueNodeRect.left - itemTextOffset,
            leftDelta = triggerRect.left - left,
            minContentWidth = triggerRect.width + leftDelta,
            contentWidth = Math.max(minContentWidth, contentRect.width),
            rightEdge =
              window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN,
            clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
              $cc7e05a45900e73f$var$CONTENT_MARGIN,
              rightEdge - contentWidth,
            ])
          ;(contentWrapper.style.minWidth = minContentWidth + 'px'),
            (contentWrapper.style.left = clampedLeft + 'px')
        } else {
          let itemTextOffset = contentRect.right - itemTextRect.right,
            right = window.innerWidth - valueNodeRect.right - itemTextOffset,
            rightDelta = window.innerWidth - triggerRect.right - right,
            minContentWidth = triggerRect.width + rightDelta,
            contentWidth = Math.max(minContentWidth, contentRect.width),
            leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN,
            clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
              $cc7e05a45900e73f$var$CONTENT_MARGIN,
              leftEdge - contentWidth,
            ])
          ;(contentWrapper.style.minWidth = minContentWidth + 'px'),
            (contentWrapper.style.right = clampedRight + 'px')
        }
        let items = getItems(),
          availableHeight =
            window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2,
          itemsHeight = viewport.scrollHeight,
          contentStyles = window.getComputedStyle(content),
          contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10),
          contentPaddingTop = parseInt(contentStyles.paddingTop, 10),
          contentBorderBottomWidth = parseInt(
            contentStyles.borderBottomWidth,
            10
          ),
          contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10),
          fullContentHeight =
            contentBorderTopWidth +
            contentPaddingTop +
            itemsHeight +
            contentPaddingBottom +
            contentBorderBottomWidth,
          minContentHeight = Math.min(
            selectedItem.offsetHeight * 5,
            fullContentHeight
          ),
          viewportStyles = window.getComputedStyle(viewport),
          viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10),
          viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10),
          topEdgeToTriggerMiddle =
            triggerRect.top +
            triggerRect.height / 2 -
            $cc7e05a45900e73f$var$CONTENT_MARGIN,
          triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle,
          selectedItemHalfHeight = selectedItem.offsetHeight / 2,
          itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight,
          contentTopToItemMiddle =
            contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle,
          itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle
        if (contentTopToItemMiddle <= topEdgeToTriggerMiddle) {
          let isLastItem = selectedItem === items[items.length - 1].ref.current
          contentWrapper.style.bottom = '0px'
          let viewportOffsetBottom =
              content.clientHeight - viewport.offsetTop - viewport.offsetHeight,
            clampedTriggerMiddleToBottomEdge = Math.max(
              triggerMiddleToBottomEdge,
              selectedItemHalfHeight +
                (isLastItem ? viewportPaddingBottom : 0) +
                viewportOffsetBottom +
                contentBorderBottomWidth
            ),
            height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge
          contentWrapper.style.height = height + 'px'
        } else {
          let isFirstItem = selectedItem === items[0].ref.current
          contentWrapper.style.top = '0px'
          let height =
            Math.max(
              topEdgeToTriggerMiddle,
              contentBorderTopWidth +
                viewport.offsetTop +
                (isFirstItem ? viewportPaddingTop : 0) +
                selectedItemHalfHeight
            ) + itemMiddleToContentBottom
          ;(contentWrapper.style.height = height + 'px'),
            (viewport.scrollTop =
              contentTopToItemMiddle -
              topEdgeToTriggerMiddle +
              viewport.offsetTop)
        }
        ;(contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`),
          (contentWrapper.style.minHeight = minContentHeight + 'px'),
          (contentWrapper.style.maxHeight = availableHeight + 'px'),
          onPlaced?.(),
          requestAnimationFrame(() => (shouldExpandOnScrollRef.current = !0))
      }
    }, [
      getItems,
      context.trigger,
      context.valueNode,
      contentWrapper,
      content,
      viewport,
      selectedItem,
      selectedItemText,
      context.dir,
      onPlaced,
    ])
  $9f79659886946c16$export$e5c5a5f917a5871c(() => position(), [position])
  let [contentZIndex, setContentZIndex] = (0, import_react21.useState)()
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    content && setContentZIndex(window.getComputedStyle(content).zIndex)
  }, [content])
  let handleScrollButtonChange = (0, import_react21.useCallback)(
    (node) => {
      node &&
        shouldRepositionRef.current === !0 &&
        (position(), focusSelectedItem?.(), (shouldRepositionRef.current = !1))
    },
    [position, focusSelectedItem]
  )
  return (0, import_react21.createElement)(
    $cc7e05a45900e73f$var$SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
    },
    (0, import_react21.createElement)(
      'div',
      {
        ref: setContentWrapper,
        style: {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          zIndex: contentZIndex,
        },
      },
      (0, import_react21.createElement)(
        $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
        _extends({}, popperProps, {
          ref: composedRefs,
          style: {
            boxSizing: 'border-box',
            maxHeight: '100%',
            ...popperProps.style,
          },
        })
      )
    )
  )
})
var $cc7e05a45900e73f$var$SelectPopperPosition = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {
          __scopeSelect,
          align = 'start',
          collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN,
          ...popperProps
        } = props,
        popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect)
      return (0, import_react21.createElement)(
        $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
        _extends({}, popperScope, popperProps, {
          ref: forwardedRef,
          align,
          collisionPadding,
          style: {
            boxSizing: 'border-box',
            ...popperProps.style,
            '--radix-select-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-select-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
        })
      )
    }
  ),
  [
    $cc7e05a45900e73f$var$SelectViewportProvider,
    $cc7e05a45900e73f$var$useSelectViewportContext,
  ] = $cc7e05a45900e73f$var$createSelectContext(
    $cc7e05a45900e73f$var$CONTENT_NAME,
    {}
  ),
  $cc7e05a45900e73f$var$VIEWPORT_NAME = 'SelectViewport',
  $cc7e05a45900e73f$export$9ed6e7b40248d36d = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, ...viewportProps} = props,
        contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
          $cc7e05a45900e73f$var$VIEWPORT_NAME,
          __scopeSelect
        ),
        viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext(
          $cc7e05a45900e73f$var$VIEWPORT_NAME,
          __scopeSelect
        ),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          contentContext.onViewportChange
        ),
        prevScrollTopRef = (0, import_react21.useRef)(0)
      return (0, import_react21.createElement)(
        import_react21.Fragment,
        null,
        (0, import_react21.createElement)('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
        }),
        (0, import_react21.createElement)(
          $cc7e05a45900e73f$var$Collection.Slot,
          {scope: __scopeSelect},
          (0, import_react21.createElement)(
            $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
            _extends(
              {'data-radix-select-viewport': '', role: 'presentation'},
              viewportProps,
              {
                ref: composedRefs,
                style: {
                  position: 'relative',
                  flex: 1,
                  overflow: 'auto',
                  ...viewportProps.style,
                },
                onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  viewportProps.onScroll,
                  (event) => {
                    let viewport = event.currentTarget,
                      {contentWrapper, shouldExpandOnScrollRef} =
                        viewportContext
                    if (
                      shouldExpandOnScrollRef != null &&
                      shouldExpandOnScrollRef.current &&
                      contentWrapper
                    ) {
                      let scrolledBy = Math.abs(
                        prevScrollTopRef.current - viewport.scrollTop
                      )
                      if (scrolledBy > 0) {
                        let availableHeight =
                            window.innerHeight -
                            $cc7e05a45900e73f$var$CONTENT_MARGIN * 2,
                          cssMinHeight = parseFloat(
                            contentWrapper.style.minHeight
                          ),
                          cssHeight = parseFloat(contentWrapper.style.height),
                          prevHeight = Math.max(cssMinHeight, cssHeight)
                        if (prevHeight < availableHeight) {
                          let nextHeight = prevHeight + scrolledBy,
                            clampedNextHeight = Math.min(
                              availableHeight,
                              nextHeight
                            ),
                            heightDiff = nextHeight - clampedNextHeight
                          ;(contentWrapper.style.height =
                            clampedNextHeight + 'px'),
                            contentWrapper.style.bottom === '0px' &&
                              ((viewport.scrollTop =
                                heightDiff > 0 ? heightDiff : 0),
                              (contentWrapper.style.justifyContent =
                                'flex-end'))
                        }
                      }
                    }
                    prevScrollTopRef.current = viewport.scrollTop
                  }
                ),
              }
            )
          )
        )
      )
    }
  ),
  $cc7e05a45900e73f$var$GROUP_NAME = 'SelectGroup',
  [
    $cc7e05a45900e73f$var$SelectGroupContextProvider,
    $cc7e05a45900e73f$var$useSelectGroupContext,
  ] = $cc7e05a45900e73f$var$createSelectContext(
    $cc7e05a45900e73f$var$GROUP_NAME
  ),
  $cc7e05a45900e73f$export$ee25a334c55de1f4 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, ...groupProps} = props,
        groupId = $1746a345f3d73bb7$export$f680877a34711e37()
      return (0, import_react21.createElement)(
        $cc7e05a45900e73f$var$SelectGroupContextProvider,
        {scope: __scopeSelect, id: groupId},
        (0, import_react21.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
          _extends({role: 'group', 'aria-labelledby': groupId}, groupProps, {
            ref: forwardedRef,
          })
        )
      )
    }
  ),
  $cc7e05a45900e73f$var$LABEL_NAME = 'SelectLabel',
  $cc7e05a45900e73f$export$f67338d29bd972f8 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, ...labelProps} = props,
        groupContext = $cc7e05a45900e73f$var$useSelectGroupContext(
          $cc7e05a45900e73f$var$LABEL_NAME,
          __scopeSelect
        )
      return (0, import_react21.createElement)(
        $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
        _extends({id: groupContext.id}, labelProps, {ref: forwardedRef})
      )
    }
  ),
  $cc7e05a45900e73f$var$ITEM_NAME = 'SelectItem',
  [
    $cc7e05a45900e73f$var$SelectItemContextProvider,
    $cc7e05a45900e73f$var$useSelectItemContext,
  ] = $cc7e05a45900e73f$var$createSelectContext(
    $cc7e05a45900e73f$var$ITEM_NAME
  ),
  $cc7e05a45900e73f$export$13ef48a934230896 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {
          __scopeSelect,
          value,
          disabled = !1,
          textValue: textValueProp,
          ...itemProps
        } = props,
        context = $cc7e05a45900e73f$var$useSelectContext(
          $cc7e05a45900e73f$var$ITEM_NAME,
          __scopeSelect
        ),
        contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
          $cc7e05a45900e73f$var$ITEM_NAME,
          __scopeSelect
        ),
        isSelected = context.value === value,
        [textValue, setTextValue] = (0, import_react21.useState)(
          textValueProp ?? ''
        ),
        [isFocused, setIsFocused] = (0, import_react21.useState)(!1),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => {
            var _contentContext$itemR
            return (_contentContext$itemR = contentContext.itemRefCallback) ===
              null || _contentContext$itemR === void 0
              ? void 0
              : _contentContext$itemR.call(
                  contentContext,
                  node,
                  value,
                  disabled
                )
          }
        ),
        textId = $1746a345f3d73bb7$export$f680877a34711e37(),
        handleSelect = () => {
          disabled || (context.onValueChange(value), context.onOpenChange(!1))
        }
      return (0, import_react21.createElement)(
        $cc7e05a45900e73f$var$SelectItemContextProvider,
        {
          scope: __scopeSelect,
          value,
          disabled,
          textId,
          isSelected,
          onItemTextChange: (0, import_react21.useCallback)((node) => {
            setTextValue((prevTextValue) => {
              var _node$textContent
              return (
                prevTextValue ||
                ((_node$textContent = node?.textContent) !== null &&
                _node$textContent !== void 0
                  ? _node$textContent
                  : ''
                ).trim()
              )
            })
          }, []),
        },
        (0, import_react21.createElement)(
          $cc7e05a45900e73f$var$Collection.ItemSlot,
          {scope: __scopeSelect, value, disabled, textValue},
          (0, import_react21.createElement)(
            $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
            _extends(
              {
                role: 'option',
                'aria-labelledby': textId,
                'data-highlighted': isFocused ? '' : void 0,
                'aria-selected': isSelected && isFocused,
                'data-state': isSelected ? 'checked' : 'unchecked',
                'aria-disabled': disabled || void 0,
                'data-disabled': disabled ? '' : void 0,
                tabIndex: disabled ? void 0 : -1,
              },
              itemProps,
              {
                ref: composedRefs,
                onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  itemProps.onFocus,
                  () => setIsFocused(!0)
                ),
                onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  itemProps.onBlur,
                  () => setIsFocused(!1)
                ),
                onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  itemProps.onPointerUp,
                  handleSelect
                ),
                onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  itemProps.onPointerMove,
                  (event) => {
                    if (disabled) {
                      var _contentContext$onIte
                      ;(_contentContext$onIte = contentContext.onItemLeave) ===
                        null ||
                        _contentContext$onIte === void 0 ||
                        _contentContext$onIte.call(contentContext)
                    } else event.currentTarget.focus({preventScroll: !0})
                  }
                ),
                onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  itemProps.onPointerLeave,
                  (event) => {
                    if (event.currentTarget === document.activeElement) {
                      var _contentContext$onIte2
                      ;(_contentContext$onIte2 = contentContext.onItemLeave) ===
                        null ||
                        _contentContext$onIte2 === void 0 ||
                        _contentContext$onIte2.call(contentContext)
                    }
                  }
                ),
                onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  itemProps.onKeyDown,
                  (event) => {
                    var _contentContext$searc
                    ;(((_contentContext$searc = contentContext.searchRef) ===
                      null || _contentContext$searc === void 0
                      ? void 0
                      : _contentContext$searc.current) !== '' &&
                      event.key === ' ') ||
                      ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(
                        event.key
                      ) && handleSelect(),
                      event.key === ' ' && event.preventDefault())
                  }
                ),
              }
            )
          )
        )
      )
    }
  ),
  $cc7e05a45900e73f$var$ITEM_TEXT_NAME = 'SelectItemText',
  $cc7e05a45900e73f$export$3572fb0fb821ff49 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, className, style, ...itemTextProps} = props,
        context = $cc7e05a45900e73f$var$useSelectContext(
          $cc7e05a45900e73f$var$ITEM_TEXT_NAME,
          __scopeSelect
        ),
        contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
          $cc7e05a45900e73f$var$ITEM_TEXT_NAME,
          __scopeSelect
        ),
        itemContext = $cc7e05a45900e73f$var$useSelectItemContext(
          $cc7e05a45900e73f$var$ITEM_TEXT_NAME,
          __scopeSelect
        ),
        nativeOptionsContext =
          $cc7e05a45900e73f$var$useSelectNativeOptionsContext(
            $cc7e05a45900e73f$var$ITEM_TEXT_NAME,
            __scopeSelect
          ),
        [itemTextNode, setItemTextNode] = (0, import_react21.useState)(null),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => setItemTextNode(node),
          itemContext.onItemTextChange,
          (node) => {
            var _contentContext$itemT
            return (_contentContext$itemT =
              contentContext.itemTextRefCallback) === null ||
              _contentContext$itemT === void 0
              ? void 0
              : _contentContext$itemT.call(
                  contentContext,
                  node,
                  itemContext.value,
                  itemContext.disabled
                )
          }
        ),
        textContent = itemTextNode?.textContent,
        nativeOption = (0, import_react21.useMemo)(
          () =>
            (0, import_react21.createElement)(
              'option',
              {
                key: itemContext.value,
                value: itemContext.value,
                disabled: itemContext.disabled,
              },
              textContent
            ),
          [itemContext.disabled, itemContext.value, textContent]
        ),
        {onNativeOptionAdd, onNativeOptionRemove} = nativeOptionsContext
      return (
        $9f79659886946c16$export$e5c5a5f917a5871c(
          () => (
            onNativeOptionAdd(nativeOption),
            () => onNativeOptionRemove(nativeOption)
          ),
          [onNativeOptionAdd, onNativeOptionRemove, nativeOption]
        ),
        (0, import_react21.createElement)(
          import_react21.Fragment,
          null,
          (0, import_react21.createElement)(
            $8927f6f2acc4f386$export$250ffa63cdc0d034.span,
            _extends({id: itemContext.textId}, itemTextProps, {
              ref: composedRefs,
            })
          ),
          itemContext.isSelected &&
            context.valueNode &&
            !context.valueNodeHasChildren
            ? (0, import_react_dom4.createPortal)(
                itemTextProps.children,
                context.valueNode
              )
            : null
        )
      )
    }
  ),
  $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = 'SelectItemIndicator',
  $cc7e05a45900e73f$export$6b9198de19accfe6 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, ...itemIndicatorProps} = props
      return $cc7e05a45900e73f$var$useSelectItemContext(
        $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME,
        __scopeSelect
      ).isSelected
        ? (0, import_react21.createElement)(
            $8927f6f2acc4f386$export$250ffa63cdc0d034.span,
            _extends({'aria-hidden': !0}, itemIndicatorProps, {
              ref: forwardedRef,
            })
          )
        : null
    }
  ),
  $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = 'SelectScrollUpButton',
  $cc7e05a45900e73f$export$d8117927658af6d7 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
          $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME,
          props.__scopeSelect
        ),
        viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext(
          $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME,
          props.__scopeSelect
        ),
        [canScrollUp1, setCanScrollUp] = (0, import_react21.useState)(!1),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          viewportContext.onScrollButtonChange
        )
      return (
        $9f79659886946c16$export$e5c5a5f917a5871c(() => {
          if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function () {
                let canScrollUp = viewport.scrollTop > 0
                setCanScrollUp(canScrollUp)
              },
              viewport = contentContext.viewport
            return (
              handleScroll2(),
              viewport.addEventListener('scroll', handleScroll2),
              () => viewport.removeEventListener('scroll', handleScroll2)
            )
          }
        }, [contentContext.viewport, contentContext.isPositioned]),
        canScrollUp1
          ? (0, import_react21.createElement)(
              $cc7e05a45900e73f$var$SelectScrollButtonImpl,
              _extends({}, props, {
                ref: composedRefs,
                onAutoScroll: () => {
                  let {viewport, selectedItem} = contentContext
                  viewport &&
                    selectedItem &&
                    (viewport.scrollTop =
                      viewport.scrollTop - selectedItem.offsetHeight)
                },
              })
            )
          : null
      )
    }
  ),
  $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = 'SelectScrollDownButton',
  $cc7e05a45900e73f$export$ff951e476c12189 = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
          $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME,
          props.__scopeSelect
        ),
        viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext(
          $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME,
          props.__scopeSelect
        ),
        [canScrollDown1, setCanScrollDown] = (0, import_react21.useState)(!1),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          viewportContext.onScrollButtonChange
        )
      return (
        $9f79659886946c16$export$e5c5a5f917a5871c(() => {
          if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function () {
                let maxScroll = viewport.scrollHeight - viewport.clientHeight,
                  canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll
                setCanScrollDown(canScrollDown)
              },
              viewport = contentContext.viewport
            return (
              handleScroll2(),
              viewport.addEventListener('scroll', handleScroll2),
              () => viewport.removeEventListener('scroll', handleScroll2)
            )
          }
        }, [contentContext.viewport, contentContext.isPositioned]),
        canScrollDown1
          ? (0, import_react21.createElement)(
              $cc7e05a45900e73f$var$SelectScrollButtonImpl,
              _extends({}, props, {
                ref: composedRefs,
                onAutoScroll: () => {
                  let {viewport, selectedItem} = contentContext
                  viewport &&
                    selectedItem &&
                    (viewport.scrollTop =
                      viewport.scrollTop + selectedItem.offsetHeight)
                },
              })
            )
          : null
      )
    }
  ),
  $cc7e05a45900e73f$var$SelectScrollButtonImpl = (0, import_react21.forwardRef)(
    (props, forwardedRef) => {
      let {__scopeSelect, onAutoScroll, ...scrollIndicatorProps} = props,
        contentContext = $cc7e05a45900e73f$var$useSelectContentContext(
          'SelectScrollButton',
          __scopeSelect
        ),
        autoScrollTimerRef = (0, import_react21.useRef)(null),
        getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect),
        clearAutoScrollTimer = (0, import_react21.useCallback)(() => {
          autoScrollTimerRef.current !== null &&
            (window.clearInterval(autoScrollTimerRef.current),
            (autoScrollTimerRef.current = null))
        }, [])
      return (
        (0, import_react21.useEffect)(
          () => () => clearAutoScrollTimer(),
          [clearAutoScrollTimer]
        ),
        $9f79659886946c16$export$e5c5a5f917a5871c(() => {
          var _activeItem$ref$curre
          let activeItem = getItems().find(
            (item) => item.ref.current === document.activeElement
          )
          activeItem == null ||
            (_activeItem$ref$curre = activeItem.ref.current) === null ||
            _activeItem$ref$curre === void 0 ||
            _activeItem$ref$curre.scrollIntoView({block: 'nearest'})
        }, [getItems]),
        (0, import_react21.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
          _extends({'aria-hidden': !0}, scrollIndicatorProps, {
            ref: forwardedRef,
            style: {flexShrink: 0, ...scrollIndicatorProps.style},
            onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              scrollIndicatorProps.onPointerDown,
              () => {
                autoScrollTimerRef.current === null &&
                  (autoScrollTimerRef.current = window.setInterval(
                    onAutoScroll,
                    50
                  ))
              }
            ),
            onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              scrollIndicatorProps.onPointerMove,
              () => {
                var _contentContext$onIte3
                ;(_contentContext$onIte3 = contentContext.onItemLeave) ===
                  null ||
                  _contentContext$onIte3 === void 0 ||
                  _contentContext$onIte3.call(contentContext),
                  autoScrollTimerRef.current === null &&
                    (autoScrollTimerRef.current = window.setInterval(
                      onAutoScroll,
                      50
                    ))
              }
            ),
            onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
              scrollIndicatorProps.onPointerLeave,
              () => {
                clearAutoScrollTimer()
              }
            ),
          })
        )
      )
    }
  )
var $cc7e05a45900e73f$export$eba4b1df07cb1d3 = (0, import_react21.forwardRef)(
  (props, forwardedRef) => {
    let {__scopeSelect, ...separatorProps} = props
    return (0, import_react21.createElement)(
      $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
      _extends({'aria-hidden': !0}, separatorProps, {ref: forwardedRef})
    )
  }
)
var $cc7e05a45900e73f$var$BubbleSelect = (0, import_react21.forwardRef)(
  (props, forwardedRef) => {
    let {value, ...selectProps} = props,
      ref = (0, import_react21.useRef)(null),
      composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
        forwardedRef,
        ref
      ),
      prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value)
    return (
      (0, import_react21.useEffect)(() => {
        let select = ref.current,
          selectProto = window.HTMLSelectElement.prototype,
          setValue = Object.getOwnPropertyDescriptor(selectProto, 'value').set
        if (prevValue !== value && setValue) {
          let event = new Event('change', {bubbles: !0})
          setValue.call(select, value), select.dispatchEvent(event)
        }
      }, [prevValue, value]),
      (0, import_react21.createElement)(
        $ea1ef594cf570d83$export$439d29a4e110a164,
        {asChild: !0},
        (0, import_react21.createElement)(
          'select',
          _extends({}, selectProps, {ref: composedRefs, defaultValue: value})
        )
      )
    )
  }
)
$cc7e05a45900e73f$var$BubbleSelect.displayName = 'BubbleSelect'
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
  let handleSearchChange =
      $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange),
    searchRef = (0, import_react21.useRef)(''),
    timerRef = (0, import_react21.useRef)(0),
    handleTypeaheadSearch = (0, import_react21.useCallback)(
      (key) => {
        let search = searchRef.current + key
        handleSearchChange(search),
          (function updateSearch(value) {
            ;(searchRef.current = value),
              window.clearTimeout(timerRef.current),
              value !== '' &&
                (timerRef.current = window.setTimeout(
                  () => updateSearch(''),
                  1e3
                ))
          })(search)
      },
      [handleSearchChange]
    ),
    resetTypeahead = (0, import_react21.useCallback)(() => {
      ;(searchRef.current = ''), window.clearTimeout(timerRef.current)
    }, [])
  return (
    (0, import_react21.useEffect)(
      () => () => window.clearTimeout(timerRef.current),
      []
    ),
    [searchRef, handleTypeaheadSearch, resetTypeahead]
  )
}
function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
  let normalizedSearch =
      search.length > 1 &&
      Array.from(search).every((char) => char === search[0])
        ? search[0]
        : search,
    currentItemIndex = currentItem ? items.indexOf(currentItem) : -1,
    wrappedItems = $cc7e05a45900e73f$var$wrapArray(
      items,
      Math.max(currentItemIndex, 0)
    )
  normalizedSearch.length === 1 &&
    (wrappedItems = wrappedItems.filter((v3) => v3 !== currentItem))
  let nextItem = wrappedItems.find((item) =>
    item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  )
  return nextItem !== currentItem ? nextItem : void 0
}
function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length])
}
var $cc7e05a45900e73f$export$be92b6f5f03c0fe9 =
    $cc7e05a45900e73f$export$ef9b1a59e592288f,
  $cc7e05a45900e73f$export$41fb9f06171c75f4 =
    $cc7e05a45900e73f$export$3ac1e88a1c0b9f1,
  $cc7e05a45900e73f$export$4c8d1a57a761ef94 =
    $cc7e05a45900e73f$export$e288731fd71264f0,
  $cc7e05a45900e73f$export$f04a61298a47a40f =
    $cc7e05a45900e73f$export$99b400cabb58c515,
  $cc7e05a45900e73f$export$602eac185826482c =
    $cc7e05a45900e73f$export$b2af6c9944296213,
  $cc7e05a45900e73f$export$7c6e2c02157bb7d2 =
    $cc7e05a45900e73f$export$c973a4b3cb86a03d,
  $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 =
    $cc7e05a45900e73f$export$9ed6e7b40248d36d,
  $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4 =
    $cc7e05a45900e73f$export$ee25a334c55de1f4,
  $cc7e05a45900e73f$export$b04be29aa201d4f5 =
    $cc7e05a45900e73f$export$f67338d29bd972f8,
  $cc7e05a45900e73f$export$6d08773d2e66f8f2 =
    $cc7e05a45900e73f$export$13ef48a934230896,
  $cc7e05a45900e73f$export$d6e5bf9c43ea9319 =
    $cc7e05a45900e73f$export$3572fb0fb821ff49,
  $cc7e05a45900e73f$export$c3468e2714d175fa =
    $cc7e05a45900e73f$export$6b9198de19accfe6,
  $cc7e05a45900e73f$export$2f60d3ec9ad468f2 =
    $cc7e05a45900e73f$export$d8117927658af6d7,
  $cc7e05a45900e73f$export$bf1aedc3039c8d63 =
    $cc7e05a45900e73f$export$ff951e476c12189,
  $cc7e05a45900e73f$export$1ff3c3f08ae963c0 =
    $cc7e05a45900e73f$export$eba4b1df07cb1d3
var dist_exports8 = {}
__export(dist_exports8, {
  Accessibility: () => Accessibility,
  AccessibilityAlt: () => AccessibilityAlt,
  Add: () => Add,
  Admin: () => Admin,
  Alert: () => Alert,
  AlertAlt: () => AlertAlt,
  Apple: () => Apple,
  ArrowDown: () => ArrowDown,
  ArrowLeft: () => ArrowLeft,
  ArrowRight: () => ArrowRight,
  ArrowSolidDown: () => ArrowSolidDown,
  ArrowSolidLeft: () => ArrowSolidLeft,
  ArrowSolidRight: () => ArrowSolidRight,
  ArrowSolidUp: () => ArrowSolidUp,
  ArrowUp: () => ArrowUp,
  AzureDevOps: () => AzureDevOps,
  Back: () => Back,
  Basket: () => Basket,
  BatchAccept: () => BatchAccept,
  BatchDeny: () => BatchDeny,
  Beaker: () => Beaker,
  Bell: () => Bell,
  Bitbucket: () => Bitbucket,
  Bold: () => Bold,
  Book: () => Book,
  Bookmark: () => Bookmark,
  BookmarkHollow: () => BookmarkHollow,
  BottomBar: () => BottomBar,
  BottomBarToggle: () => BottomBarToggle,
  Box: () => Box,
  Branch: () => Branch,
  Browser: () => Browser,
  Button: () => Button,
  CPU: () => CPU,
  Calendar: () => Calendar,
  Camera: () => Camera,
  Category: () => Category,
  Certificate: () => Certificate,
  Changed: () => Changed,
  Chat: () => Chat,
  Check: () => Check,
  ChevronDown: () => ChevronDown,
  ChevronLeft: () => ChevronLeft,
  ChevronRight: () => ChevronRight,
  ChevronUp: () => ChevronUp,
  Chromatic: () => Chromatic,
  Chrome: () => Chrome,
  Circle: () => Circle,
  CircleHollow: () => CircleHollow,
  Clear: () => Clear,
  Close: () => Close,
  CloseAlt: () => CloseAlt,
  Cloud: () => Cloud,
  CloudHollow: () => CloudHollow,
  Cog: () => Cog,
  Collapse: () => Collapse,
  Command: () => Command,
  Comment: () => Comment,
  CommentAdd: () => CommentAdd,
  Comments: () => Comments,
  Commit: () => Commit,
  Compass: () => Compass,
  Component: () => Component,
  ComponentDriven: () => ComponentDriven,
  Contrast: () => Contrast,
  Controls: () => Controls,
  Copy: () => Copy,
  Credit: () => Credit,
  Cross: () => Cross,
  Dashboard: () => Dashboard,
  Database: () => Database,
  Delete: () => Delete,
  Diamond: () => Diamond,
  Direction: () => Direction,
  Discord: () => Discord,
  DocChart: () => DocChart,
  DocList: () => DocList,
  Document: () => Document,
  Download: () => Download,
  Edit: () => Edit,
  Ellipsis: () => Ellipsis,
  Email: () => Email,
  Expand: () => Expand,
  ExpandAlt: () => ExpandAlt,
  Eye: () => Eye,
  EyeClose: () => EyeClose,
  FaceHappy: () => FaceHappy,
  FaceNeutral: () => FaceNeutral,
  FaceSad: () => FaceSad,
  Facebook: () => Facebook,
  Failed: () => Failed,
  FastForward: () => FastForward,
  Figma: () => Figma,
  Filter: () => Filter,
  Flag: () => Flag,
  Folder: () => Folder,
  Form: () => Form,
  GDrive: () => GDrive,
  Github: () => Github,
  Gitlab: () => Gitlab,
  Globe: () => Globe,
  Google: () => Google,
  GraphBar: () => GraphBar,
  GraphLine: () => GraphLine,
  Graphql: () => Graphql,
  Grid: () => Grid,
  GridAlt: () => GridAlt,
  Grow: () => Grow,
  Heart: () => Heart,
  HeartHollow: () => HeartHollow,
  Home: () => Home,
  Hourglass: () => Hourglass,
  Info: () => Info,
  Italic: () => Italic,
  JumpTo: () => JumpTo,
  Key: () => Key,
  Lightning: () => Lightning,
  LightningOff: () => LightningOff,
  Link: () => Link,
  LinkBroken: () => LinkBroken,
  Linkedin: () => Linkedin,
  Linux: () => Linux,
  ListOrdered: () => ListOrdered,
  ListUnordered: () => ListUnordered,
  Location: () => Location,
  Lock: () => Lock,
  Markdown: () => Markdown,
  Markup: () => Markup,
  Medium: () => Medium,
  Memory: () => Memory,
  Menu: () => Menu,
  MenuReverse: () => MenuReverse,
  Merge: () => Merge,
  Mirror: () => Mirror,
  Mobile: () => Mobile,
  Moon: () => Moon,
  Nut: () => Nut,
  Outbox: () => Outbox,
  Outline: () => Outline,
  PaintBrush: () => PaintBrush,
  PaperClip: () => PaperClip,
  Paragraph: () => Paragraph,
  Passed: () => Passed,
  Phone: () => Phone,
  Photo: () => Photo,
  PhotoDrag: () => PhotoDrag,
  Pin: () => Pin,
  PinAlt: () => PinAlt,
  Play: () => Play,
  PlayBack: () => PlayBack,
  PlayNext: () => PlayNext,
  Plus: () => Plus,
  PointerDefault: () => PointerDefault,
  PointerHand: () => PointerHand,
  Power: () => Power,
  Print: () => Print,
  Proceed: () => Proceed,
  Profile: () => Profile,
  PullRequest: () => PullRequest,
  Question: () => Question,
  RSS: () => RSS,
  Redirect: () => Redirect,
  Redux: () => Redux,
  Refresh: () => Refresh,
  Reply: () => Reply,
  Repo: () => Repo,
  RequestChange: () => RequestChange,
  Rewind: () => Rewind,
  Ruler: () => Ruler,
  Search: () => Search,
  Share: () => Share,
  ShareAlt: () => ShareAlt,
  Shield: () => Shield,
  SideBySide: () => SideBySide,
  Sidebar: () => Sidebar,
  SidebarAlt: () => SidebarAlt,
  SidebarAltToggle: () => SidebarAltToggle,
  SidebarToggle: () => SidebarToggle,
  Speaker: () => Speaker,
  Stacked: () => Stacked,
  Star: () => Star,
  StarHollow: () => StarHollow,
  Sticker: () => Sticker,
  Stop: () => Stop,
  StopAlt: () => StopAlt,
  Storybook: () => Storybook,
  Structure: () => Structure,
  Subtract: () => Subtract,
  Sun: () => Sun,
  Support: () => Support,
  SwitchAlt: () => SwitchAlt,
  Sync: () => Sync,
  Tablet: () => Tablet,
  ThumbsUp: () => ThumbsUp,
  Time: () => Time,
  Timer: () => Timer,
  Transfer: () => Transfer,
  Trash: () => Trash,
  Twitter: () => Twitter,
  Type: () => Type,
  Ubuntu: () => Ubuntu,
  Undo: () => Undo,
  Unfold: () => Unfold,
  Unlock: () => Unlock,
  Unpin: () => Unpin,
  Upload: () => Upload,
  User: () => User,
  UserAdd: () => UserAdd,
  UserAlt: () => UserAlt,
  Users: () => Users,
  VSCode: () => VSCode,
  Verified: () => Verified,
  Video: () => Video,
  Wand: () => Wand,
  Watch: () => Watch,
  Windows: () => Windows,
  Wrench: () => Wrench,
  Youtube: () => Youtube,
  Zoom: () => Zoom,
  ZoomOut: () => ZoomOut,
  ZoomReset: () => ZoomReset,
})
var import_react22 = __toESM(require_react(), 1),
  Fallback = ({size}) =>
    import_react22.default.createElement('div', {
      style: {width: size, height: size},
    })
function withSuspense(WrappedComponent) {
  function ComponentWithSuspense(props) {
    return import_react22.default.createElement(
      import_react22.Suspense,
      {fallback: import_react22.default.createElement(Fallback, {...props})},
      import_react22.default.createElement(WrappedComponent, {...props})
    )
  }
  return ComponentWithSuspense
}
var Photo = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Photo,
    }))
  ),
  Component = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Component,
    }))
  ),
  Grid = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Grid,
    }))
  ),
  Outline = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Outline,
    }))
  ),
  PhotoDrag = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).PhotoDrag,
    }))
  ),
  GridAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).GridAlt,
    }))
  ),
  Search = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Search,
    }))
  ),
  Zoom = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Zoom,
    }))
  ),
  ZoomOut = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).ZoomOut,
    }))
  ),
  ZoomReset = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).ZoomReset,
    }))
  ),
  Eye = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Eye,
    }))
  ),
  EyeClose = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).EyeClose,
    }))
  ),
  Lightning = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Lightning,
    }))
  ),
  LightningOff = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).LightningOff,
    }))
  ),
  Contrast = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Contrast,
    }))
  ),
  SwitchAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).SwitchAlt,
    }))
  ),
  Mirror = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Mirror,
    }))
  ),
  Grow = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Grow,
    }))
  ),
  PaintBrush = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).PaintBrush,
    }))
  ),
  Ruler = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Ruler,
    }))
  ),
  Stop = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Stop,
    }))
  ),
  Camera = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Camera,
    }))
  ),
  Video = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Video,
    }))
  ),
  Speaker = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Speaker,
    }))
  ),
  Play = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Play,
    }))
  ),
  PlayBack = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).PlayBack,
    }))
  ),
  PlayNext = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).PlayNext,
    }))
  ),
  Rewind = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Rewind,
    }))
  ),
  FastForward = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).FastForward,
    }))
  ),
  StopAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).StopAlt,
    }))
  ),
  SideBySide = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).SideBySide,
    }))
  ),
  Stacked = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Stacked,
    }))
  ),
  Sun = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Sun,
    }))
  ),
  Moon = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Images-GZQ25EFM-UQPTU7KU.js')).Moon,
    }))
  ),
  Book = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Book,
    }))
  ),
  Document = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Document,
    }))
  ),
  Copy = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Copy,
    }))
  ),
  Category = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Category,
    }))
  ),
  Folder = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Folder,
    }))
  ),
  Print = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Print,
    }))
  ),
  GraphLine = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).GraphLine,
    }))
  ),
  Calendar = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Calendar,
    }))
  ),
  GraphBar = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).GraphBar,
    }))
  ),
  Menu = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Menu,
    }))
  ),
  MenuReverse = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).MenuReverse,
    }))
  ),
  Filter = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).Filter,
    }))
  ),
  DocChart = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).DocChart,
    }))
  ),
  DocList = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Documents-DM6I5CUP-XVWSPLXW.js')).DocList,
    }))
  ),
  Markup = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).Markup,
    }))
  ),
  Bold = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).Bold,
    }))
  ),
  Italic = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).Italic,
    }))
  ),
  PaperClip = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).PaperClip,
    }))
  ),
  ListOrdered = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).ListOrdered,
    }))
  ),
  ListUnordered = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).ListUnordered,
    }))
  ),
  Paragraph = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).Paragraph,
    }))
  ),
  Markdown = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Editing-IW5SUF2G-D4JF5XQR.js')).Markdown,
    }))
  ),
  Repo = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Git-TRL4MCAM-3JEGHK27.js')).Repo,
    }))
  ),
  Commit = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Git-TRL4MCAM-3JEGHK27.js')).Commit,
    }))
  ),
  Branch = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Git-TRL4MCAM-3JEGHK27.js')).Branch,
    }))
  ),
  PullRequest = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Git-TRL4MCAM-3JEGHK27.js')).PullRequest,
    }))
  ),
  Merge = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Git-TRL4MCAM-3JEGHK27.js')).Merge,
    }))
  ),
  Apple = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./OS-6JZP22UV-DXEEOXNT.js')).Apple,
    }))
  ),
  Linux = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./OS-6JZP22UV-DXEEOXNT.js')).Linux,
    }))
  ),
  Ubuntu = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./OS-6JZP22UV-DXEEOXNT.js')).Ubuntu,
    }))
  ),
  Windows = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./OS-6JZP22UV-DXEEOXNT.js')).Windows,
    }))
  ),
  Chrome = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./OS-6JZP22UV-DXEEOXNT.js')).Chrome,
    }))
  ),
  Storybook = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Storybook,
    }))
  ),
  AzureDevOps = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).AzureDevOps,
    }))
  ),
  Bitbucket = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Bitbucket,
    }))
  ),
  Chromatic = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Chromatic,
    }))
  ),
  ComponentDriven = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).ComponentDriven,
    }))
  ),
  Discord = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Discord,
    }))
  ),
  Facebook = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Facebook,
    }))
  ),
  Figma = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Figma,
    }))
  ),
  GDrive = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).GDrive,
    }))
  ),
  Github = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Github,
    }))
  ),
  Gitlab = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Gitlab,
    }))
  ),
  Google = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Google,
    }))
  ),
  Graphql = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Graphql,
    }))
  ),
  Medium = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Medium,
    }))
  ),
  Redux = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Redux,
    }))
  ),
  Twitter = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Twitter,
    }))
  ),
  Youtube = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Youtube,
    }))
  ),
  VSCode = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).VSCode,
    }))
  ),
  Linkedin = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Logos-EOJQS4O3-SJCQKPUS.js')).Linkedin,
    }))
  ),
  Browser = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Browser,
    }))
  ),
  Tablet = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Tablet,
    }))
  ),
  Mobile = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Mobile,
    }))
  ),
  Watch = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Watch,
    }))
  ),
  Sidebar = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Sidebar,
    }))
  ),
  SidebarAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).SidebarAlt,
    }))
  ),
  SidebarAltToggle = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js'))
        .SidebarAltToggle,
    }))
  ),
  SidebarToggle = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).SidebarToggle,
    }))
  ),
  BottomBar = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).BottomBar,
    }))
  ),
  BottomBarToggle = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).BottomBarToggle,
    }))
  ),
  CPU = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).CPU,
    }))
  ),
  Database = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Database,
    }))
  ),
  Memory = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Memory,
    }))
  ),
  Structure = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Structure,
    }))
  ),
  Box = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Box,
    }))
  ),
  Power = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Devices-OZM56PEU-YWWWQK4B.js')).Power,
    }))
  ),
  Edit = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Edit,
    }))
  ),
  Cog = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Cog,
    }))
  ),
  Nut = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Nut,
    }))
  ),
  Wrench = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Wrench,
    }))
  ),
  Ellipsis = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Ellipsis,
    }))
  ),
  Wand = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Wand,
    }))
  ),
  Check = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Check,
    }))
  ),
  Form = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Form,
    }))
  ),
  BatchDeny = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).BatchDeny,
    }))
  ),
  BatchAccept = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).BatchAccept,
    }))
  ),
  Controls = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Controls,
    }))
  ),
  Plus = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Plus,
    }))
  ),
  CloseAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).CloseAlt,
    }))
  ),
  Cross = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Cross,
    }))
  ),
  Trash = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Trash,
    }))
  ),
  PinAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).PinAlt,
    }))
  ),
  Unpin = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Unpin,
    }))
  ),
  Add = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Add,
    }))
  ),
  Subtract = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Subtract,
    }))
  ),
  Close = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Close,
    }))
  ),
  Delete = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Delete,
    }))
  ),
  Passed = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Passed,
    }))
  ),
  Changed = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Changed,
    }))
  ),
  Failed = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Failed,
    }))
  ),
  Clear = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Clear,
    }))
  ),
  Comment = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Comment,
    }))
  ),
  CommentAdd = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).CommentAdd,
    }))
  ),
  RequestChange = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).RequestChange,
    }))
  ),
  Comments = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Comments,
    }))
  ),
  Chat = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Chat,
    }))
  ),
  Lock = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Lock,
    }))
  ),
  Unlock = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Unlock,
    }))
  ),
  Key = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Key,
    }))
  ),
  Outbox = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Outbox,
    }))
  ),
  Credit = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Credit,
    }))
  ),
  Button = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Button,
    }))
  ),
  Type = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Type,
    }))
  ),
  PointerDefault = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).PointerDefault,
    }))
  ),
  PointerHand = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).PointerHand,
    }))
  ),
  Command = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./CRUD-JM54CQ7N-IIGISR5J.js')).Command,
    }))
  ),
  Info = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Info,
    }))
  ),
  Question = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Question,
    }))
  ),
  Support = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Support,
    }))
  ),
  Alert = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Alert,
    }))
  ),
  AlertAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).AlertAlt,
    }))
  ),
  Email = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Email,
    }))
  ),
  Phone = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Phone,
    }))
  ),
  Link = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Link,
    }))
  ),
  LinkBroken = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).LinkBroken,
    }))
  ),
  Bell = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Bell,
    }))
  ),
  RSS = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).RSS,
    }))
  ),
  ShareAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).ShareAlt,
    }))
  ),
  Share = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Share,
    }))
  ),
  JumpTo = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).JumpTo,
    }))
  ),
  CircleHollow = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js'))
        .CircleHollow,
    }))
  ),
  Circle = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Circle,
    }))
  ),
  BookmarkHollow = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js'))
        .BookmarkHollow,
    }))
  ),
  Bookmark = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Bookmark,
    }))
  ),
  Diamond = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Diamond,
    }))
  ),
  HeartHollow = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).HeartHollow,
    }))
  ),
  Heart = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Heart,
    }))
  ),
  StarHollow = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).StarHollow,
    }))
  ),
  Star = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Star,
    }))
  ),
  Certificate = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Certificate,
    }))
  ),
  Verified = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Verified,
    }))
  ),
  ThumbsUp = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).ThumbsUp,
    }))
  ),
  Shield = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Shield,
    }))
  ),
  Basket = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Basket,
    }))
  ),
  Beaker = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Beaker,
    }))
  ),
  Hourglass = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Hourglass,
    }))
  ),
  Flag = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Flag,
    }))
  ),
  CloudHollow = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).CloudHollow,
    }))
  ),
  Cloud = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Cloud,
    }))
  ),
  Sticker = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Communicate-ILFU4JFX-SW5LX7M2.js')).Sticker,
    }))
  ),
  ChevronUp = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ChevronUp,
    }))
  ),
  ChevronDown = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ChevronDown,
    }))
  ),
  ChevronLeft = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ChevronLeft,
    }))
  ),
  ChevronRight = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ChevronRight,
    }))
  ),
  ArrowUp = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ArrowUp,
    }))
  ),
  ArrowDown = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ArrowDown,
    }))
  ),
  ArrowLeft = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ArrowLeft,
    }))
  ),
  ArrowRight = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ArrowRight,
    }))
  ),
  ArrowSolidUp = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ArrowSolidUp,
    }))
  ),
  ArrowSolidDown = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js'))
        .ArrowSolidDown,
    }))
  ),
  ArrowSolidLeft = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js'))
        .ArrowSolidLeft,
    }))
  ),
  ArrowSolidRight = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js'))
        .ArrowSolidRight,
    }))
  ),
  ExpandAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).ExpandAlt,
    }))
  ),
  Collapse = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Collapse,
    }))
  ),
  Expand = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Expand,
    }))
  ),
  Unfold = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Unfold,
    }))
  ),
  Transfer = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Transfer,
    }))
  ),
  Redirect = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Redirect,
    }))
  ),
  Undo = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Undo,
    }))
  ),
  Reply = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Reply,
    }))
  ),
  Sync = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Sync,
    }))
  ),
  Upload = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Upload,
    }))
  ),
  Download = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Download,
    }))
  ),
  Back = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Back,
    }))
  ),
  Proceed = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Proceed,
    }))
  ),
  Refresh = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Refresh,
    }))
  ),
  Globe = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Globe,
    }))
  ),
  Compass = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Compass,
    }))
  ),
  Location = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Location,
    }))
  ),
  Pin = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Pin,
    }))
  ),
  Time = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Time,
    }))
  ),
  Dashboard = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Dashboard,
    }))
  ),
  Timer = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Timer,
    }))
  ),
  Home = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Home,
    }))
  ),
  Admin = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Admin,
    }))
  ),
  Direction = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./Wayfinding-AUSNPVSH-QFGOSTNT.js')).Direction,
    }))
  ),
  User = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).User,
    }))
  ),
  UserAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).UserAlt,
    }))
  ),
  UserAdd = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).UserAdd,
    }))
  ),
  Users = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).Users,
    }))
  ),
  Profile = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).Profile,
    }))
  ),
  FaceHappy = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).FaceHappy,
    }))
  ),
  FaceNeutral = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).FaceNeutral,
    }))
  ),
  FaceSad = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).FaceSad,
    }))
  ),
  Accessibility = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).Accessibility,
    }))
  ),
  AccessibilityAlt = withSuspense(
    (0, import_react22.lazy)(async () => ({
      default: (await import('./People-HEMUKL4R-S77ITYXB.js')).AccessibilityAlt,
    }))
  )
var Button2 = (0, import_react23.forwardRef)(
  ({as, children, icon, ...props}, ref) =>
    import_react23.default.createElement(
      StyledButton,
      {as, ref, ...props},
      icon,
      !props.iconOnly && children
    )
)
Button2.displayName = 'Button'
var StyledButton = newStyled.button(
    ({
      theme,
      variant = 'primary',
      size = 'medium',
      disabled = !1,
      active = !1,
      iconOnly = !1,
    }) => ({
      border: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      gap: '6px',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: `${(() =>
        !iconOnly && size === 'small'
          ? '0 10px'
          : !iconOnly && size === 'medium'
          ? '0 12px'
          : 0)()}`,
      width: `${(() =>
        iconOnly && size === 'small'
          ? '28px'
          : iconOnly && size === 'medium'
          ? '32px'
          : 'auto')()}`,
      height: size === 'small' ? '28px' : '32px',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      transitionProperty: 'background, box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-out',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      opacity: disabled ? 0.5 : 1,
      margin: 0,
      fontSize: `${theme.typography.size.s1}px`,
      fontWeight: theme.typography.weight.bold,
      lineHeight: '1',
      background: `${(() =>
        variant === 'primary'
          ? theme.color.secondary
          : variant === 'secondary'
          ? theme.button.background
          : variant === 'tertiary' && active
          ? theme.background.hoverable
          : 'transparent')()}`,
      color: `${(() =>
        variant === 'primary'
          ? theme.color.lightest
          : variant === 'secondary'
          ? theme.input.color
          : variant === 'tertiary' && active
          ? theme.color.secondary
          : variant === 'tertiary'
          ? theme.color.mediumdark
          : theme.input.color)()}`,
      boxShadow:
        variant === 'secondary'
          ? `${theme.button.border} 0 0 0 1px inset`
          : 'none',
      borderRadius: theme.input.borderRadius,
      '&:hover': {
        color: variant === 'tertiary' ? theme.color.secondary : null,
        background: `${(() => {
          let bgColor = theme.color.secondary
          return (
            variant === 'primary' && (bgColor = theme.color.secondary),
            variant === 'secondary' && (bgColor = theme.button.background),
            variant === 'tertiary'
              ? curriedTransparentize$1(0.86, theme.color.secondary)
              : theme.base === 'light'
              ? curriedDarken$1(0.02, bgColor)
              : curriedLighten$1(0.03, bgColor)
          )
        })()}`,
      },
      '&:active': {
        color: variant === 'tertiary' ? theme.color.secondary : null,
        background: `${(() => {
          let bgColor = theme.color.secondary
          return (
            variant === 'primary' && (bgColor = theme.color.secondary),
            variant === 'secondary' && (bgColor = theme.button.background),
            variant === 'tertiary'
              ? theme.background.hoverable
              : theme.base === 'light'
              ? curriedDarken$1(0.02, bgColor)
              : curriedLighten$1(0.03, bgColor)
          )
        })()}`,
      },
      '&:focus': {
        boxShadow: `${rgba(theme.color.secondary, 1)} 0 0 0 1px inset`,
        outline: 'none',
      },
    })
  ),
  Input = (0, import_react23.forwardRef)(({...props}, ref) =>
    import_react23.default.createElement(StyledInput, {ref, ...props})
  )
Input.displayName = 'Input'
var StyledInput = newStyled.input(({theme}) => ({
    appearance: 'none',
    border: '0 none',
    display: 'block',
    margin: ' 0',
    position: 'relative',
    width: '100%',
    height: '32px',
    transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
    color: theme.input.color,
    background: theme.input.background,
    boxShadow: `${theme.input.border} 0 0 0 1px inset`,
    borderRadius: theme.input.borderRadius,
    fontSize: theme.typography.size.s2 - 1,
    padding: '6px 10px',
    boxSizing: 'border-box',
    lineHeight: '20px',
    '&:focus': {
      boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
    '&[disabled]': {cursor: 'not-allowed', opacity: 0.5},
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 3em ${theme.color.lightest} inset`,
    },
    '&::placeholder': {color: theme.textMutedColor, opacity: 1},
  })),
  IconWrapper = ({icon, color: colorProp, size: sizeProp, ...restProps}) => {
    let color = colorProp || 'currentColor',
      size = sizeProp || '14px'
    return React8.createElement(
      'span',
      {
        role: 'img',
        'aria-hidden': 'true',
        style: {
          color,
          width: size,
          height: size,
          display: 'inline-flex',
          fontSize: 'inherit',
        },
        ...restProps,
      },
      icon
    )
  },
  ExpandAlt2 = (allProps) => {
    let {svgProps: props, ...restProps} = allProps
    return React8.createElement(IconWrapper, {
      icon: React8.createElement(
        'svg',
        {
          width: 'inherit',
          height: 'inherit',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...props,
        },
        React8.createElement('path', {
          d: 'M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z',
          fill: 'currentColor',
        })
      ),
      ...restProps,
    })
  },
  Arrowup = (allProps) => {
    let {svgProps: props, ...restProps} = allProps
    return React8.createElement(IconWrapper, {
      icon: React8.createElement(
        'svg',
        {
          width: 'inherit',
          height: 'inherit',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...props,
        },
        React8.createElement('path', {
          d: 'M7.354 2.896l5.5 5.5a.5.5 0 01-.708.708L7 3.957 1.854 9.104a.5.5 0 11-.708-.708l5.5-5.5a.5.5 0 01.708 0z',
          fill: 'currentColor',
        })
      ),
      ...restProps,
    })
  },
  Arrowdown = (allProps) => {
    let {svgProps: props, ...restProps} = allProps
    return React8.createElement(IconWrapper, {
      icon: React8.createElement(
        'svg',
        {
          width: 'inherit',
          height: 'inherit',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...props,
        },
        React8.createElement('path', {
          d: 'M1.146 5.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 10.043 1.854 4.896a.5.5 0 10-.708.708z',
          fill: 'currentColor',
        })
      ),
      ...restProps,
    })
  },
  Check2 = (allProps) => {
    let {svgProps: props, ...restProps} = allProps
    return React8.createElement(IconWrapper, {
      icon: React8.createElement(
        'svg',
        {
          width: 'inherit',
          height: 'inherit',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...props,
        },
        React8.createElement('path', {
          d: 'M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z',
          fill: 'currentColor',
        })
      ),
      ...restProps,
    })
  },
  SelectTrigger = React8.forwardRef(({className, children, ...props}, ref) =>
    React8.createElement(
      StyledTrigger,
      {ref, ...props},
      children,
      React8.createElement(
        $cc7e05a45900e73f$export$f04a61298a47a40f,
        {asChild: !0},
        React8.createElement(ExpandAlt2, {size: 12})
      )
    )
  )
SelectTrigger.displayName =
  $cc7e05a45900e73f$export$41fb9f06171c75f4.displayName
var SelectContent = React8.forwardRef(({className, children, ...props}, ref) =>
  React8.createElement(
    $cc7e05a45900e73f$export$602eac185826482c,
    null,
    React8.createElement(
      StyledContent,
      {ref, ...props},
      React8.createElement(
        StyledScrollUpButton,
        null,
        React8.createElement(Arrowup, {size: 12})
      ),
      React8.createElement(StyledViewport, null, children),
      React8.createElement(
        StyledScrollDownButton,
        null,
        React8.createElement(Arrowdown, {size: 12})
      )
    )
  )
)
SelectContent.displayName =
  $cc7e05a45900e73f$export$7c6e2c02157bb7d2.displayName
var SelectLabel = React8.forwardRef(({className, ...props}, ref) =>
  React8.createElement($cc7e05a45900e73f$export$b04be29aa201d4f5, {
    ref,
    ...props,
  })
)
SelectLabel.displayName = $cc7e05a45900e73f$export$b04be29aa201d4f5.displayName
var SelectItem = React8.forwardRef(({className, children, ...props}, ref) =>
  React8.createElement(
    StyledItem,
    {ref, ...props},
    React8.createElement(
      StyledItemIndicator,
      null,
      React8.createElement(Check2, {size: 12})
    ),
    React8.createElement(
      $cc7e05a45900e73f$export$d6e5bf9c43ea9319,
      null,
      children
    )
  )
)
SelectItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName
var SelectSeparator = React8.forwardRef(({className, ...props}, ref) =>
  React8.createElement($cc7e05a45900e73f$export$1ff3c3f08ae963c0, {
    ref,
    ...props,
  })
)
SelectSeparator.displayName =
  $cc7e05a45900e73f$export$1ff3c3f08ae963c0.displayName
var Select = {
    Root: $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
    Group: $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4,
    Value: $cc7e05a45900e73f$export$4c8d1a57a761ef94,
    Trigger: SelectTrigger,
    Content: SelectContent,
    Label: SelectLabel,
    Item: SelectItem,
    Separator: SelectSeparator,
  },
  StyledTrigger = newStyled($cc7e05a45900e73f$export$41fb9f06171c75f4)(
    ({theme}) => ({
      all: 'unset',
      display: 'flex',
      width: '100%',
      height: '32px',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
      color: theme.input.color,
      background: theme.input.background,
      boxShadow: `${theme.input.border} 0 0 0 1px inset`,
      borderRadius: theme.input.borderRadius,
      fontSize: theme.typography.size.s2 - 1,
      padding: '6px 10px',
      boxSizing: 'border-box',
      lineHeight: '20px',
      '&:focus': {
        boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
        outline: 'none',
      },
      '&[disabled]': {cursor: 'not-allowed', opacity: 0.5},
      '&[data-placeholder]': {color: theme.textMutedColor},
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 3em ${theme.color.lightest} inset`,
      },
    })
  ),
  StyledContent = newStyled($cc7e05a45900e73f$export$7c6e2c02157bb7d2)(
    ({theme}) => ({
      boxSizing: 'border-box',
      overflow: 'hidden',
      backgroundColor: theme.input.background,
      borderRadius: '6px',
      border:
        theme.base === 'dark'
          ? `1px solid ${theme.input.border}`
          : '1px solid transparent',
      width: '100%',
      boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    })
  ),
  StyledViewport = newStyled($cc7e05a45900e73f$export$d5c6c08dc2d3ca7)(() => ({
    boxSizing: 'border-box',
    width: '100%',
    padding: '5px',
  })),
  StyledScrollUpButton = newStyled($cc7e05a45900e73f$export$2f60d3ec9ad468f2)(
    ({theme}) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '25px',
      backgroundColor: theme.input.background,
      color: theme.input.color,
      cursor: 'default',
    })
  ),
  StyledScrollDownButton = newStyled($cc7e05a45900e73f$export$bf1aedc3039c8d63)(
    ({theme}) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '25px',
      backgroundColor: theme.input.background,
      color: theme.input.color,
      cursor: 'default',
    })
  ),
  StyledItem = newStyled($cc7e05a45900e73f$export$6d08773d2e66f8f2)(
    ({theme}) => ({
      fontSize: '13px',
      lineHeight: 1,
      color: theme.input.color,
      borderRadius: '3px',
      display: 'flex',
      alignItems: 'center',
      height: '25px',
      padding: '0 35px 0 25px',
      position: 'relative',
      userSelect: 'none',
      '&[data-disabled]': {color: 'red', pointerEvents: 'none'},
      '&[data-highlighted]': {
        outline: 'none',
        backgroundColor: theme.barSelectedColor,
        color: theme.barBg,
      },
    })
  ),
  StyledItemIndicator = newStyled($cc7e05a45900e73f$export$c3468e2714d175fa)(
    () => ({
      position: 'absolute',
      left: 0,
      width: '25px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    })
  ),
  Link2 = (0, import_react23.forwardRef)(
    ({as, children, icon, withArrow, ...props}, ref) =>
      import_react23.default.createElement(
        StyledLink,
        {as, ref, ...props},
        import_react23.default.createElement(StyledLeft, null, icon, children),
        withArrow &&
          import_react23.default.createElement(ChevronRight, {size: 8})
      )
  )
Link2.displayName = 'Link'
var StyledLink = newStyled.a(({theme, variant = 'primary'}) => ({
    display: 'inline-flex',
    gap: 4,
    alignItems: 'center',
    transition: 'all 150ms ease-out',
    textDecoration: 'none',
    lineHeight: 1,
    color: `${(() =>
      variant === 'primary'
        ? theme.color.secondary
        : variant === 'secondary'
        ? theme.textMutedColor
        : variant === 'tertiary'
        ? theme.color.dark
        : theme.color.secondary)()}`,
    '&:hover, &:focus': {
      cursor: 'pointer',
      color: `${(() =>
        variant === 'primary'
          ? curriedDarken$1(0.07, theme.color.secondary)
          : variant === 'secondary'
          ? theme.color.dark
          : variant === 'tertiary'
          ? theme.color.darkest
          : curriedDarken$1(0.07, theme.color.secondary))()}`,
    },
    '&:active': {
      color: `${(() =>
        variant === 'primary'
          ? curriedDarken$1(0.1, theme.color.secondary)
          : variant === 'secondary'
          ? theme.color.darker
          : variant === 'tertiary'
          ? theme.textMutedColor
          : curriedDarken$1(0.1, theme.color.secondary))()}`,
    },
  })),
  StyledLeft = newStyled.span(({theme}) => ({
    display: 'inline-flex',
    gap: 6,
    alignItems: 'center',
    fontSize: theme.typography.size.s2 - 1,
  }))
var values = {
  react: REACT,
  'react-dom': REACTDOM,
  '@storybook/components': dist_exports7,
  '@storybook/components/experimental': experimental_exports,
  '@storybook/channels': dist_exports4,
  '@storybook/core-events': dist_exports3,
  '@storybook/router': dist_exports2,
  '@storybook/theming': dist_exports6,
  '@storybook/api': dist_exports5,
  '@storybook/manager-api': dist_exports5,
  '@storybook/addons': {addons, types: Addon_TypesEnum, mockChannel},
  '@storybook/client-logger': dist_exports,
}
var Keys = ((Keys2) => (
  (Keys2.react = '__REACT__'),
  (Keys2['react-dom'] = '__REACTDOM__'),
  (Keys2['@storybook/components'] = '__STORYBOOKCOMPONENTS__'),
  (Keys2['@storybook/components/experimental'] =
    '__STORYBOOKCOMPONENTSEXPERIMENTAL__'),
  (Keys2['@storybook/channels'] = '__STORYBOOKCHANNELS__'),
  (Keys2['@storybook/core-events'] = '__STORYBOOKCOREEVENTS__'),
  (Keys2['@storybook/router'] = '__STORYBOOKROUTER__'),
  (Keys2['@storybook/theming'] = '__STORYBOOKTHEMING__'),
  (Keys2['@storybook/api'] = '__STORYBOOKAPI__'),
  (Keys2['@storybook/manager-api'] = '__STORYBOOKAPI__'),
  (Keys2['@storybook/addons'] = '__STORYBOOKADDONS__'),
  (Keys2['@storybook/client-logger'] = '__STORYBOOKCLIENTLOGGER__'),
  Keys2
))(Keys || {})
var {FEATURES, CONFIG_TYPE} = scope,
  ReactProvider = class extends Provider {
    constructor() {
      super()
      let channel = createBrowserChannel({page: 'manager'})
      addons.setChannel(channel),
        channel.emit(CHANNEL_CREATED),
        (this.addons = addons),
        (this.channel = channel),
        FEATURES?.storyStoreV7 &&
          CONFIG_TYPE === 'DEVELOPMENT' &&
          ((this.serverChannel = this.channel),
          addons.setServerChannel(this.serverChannel))
    }
    getElements(type) {
      return this.addons.getElements(type)
    }
    getConfig() {
      return this.addons.getConfig()
    }
    handleAPI(api) {
      this.addons.loadAddons(api)
    }
  },
  {document: document2} = scope,
  rootEl = document2.getElementById('root')
renderStorybookUI(rootEl, new ReactProvider())
Object.keys(Keys).forEach((key) => {
  scope[Keys[key]] = values[key]
})
